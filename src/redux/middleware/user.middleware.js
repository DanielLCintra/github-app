import {
  initLoading,
  endLoading,
  setError,
  unsetError,
  setSuccess,
  unsetSuccess,
} from "../slices/generics.slice";
import http from "../api/http";
import { setUser, setRepos } from "../slices/user.slice";

const getGitHubApiUrl = (userName, type, page = 1, perPage = 4) => {
  const internalUser = userName ? `/${userName}` : "";

  const internalType = type ? `/${type}` : "";
  return `/users${internalUser}${internalType}?per_page=${perPage}&page=${page}`;
};

export const getUser = (userName) => {
  return async (dispatch) => {
    dispatch(initLoading());
    try {
      let response = await http.get(getGitHubApiUrl(userName));
      if (response.status === 200 || response.status === 201) {
        dispatch(setUser({ user: response.data }));
        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: `Usuário carregado com sucesso`,
          })
        );
      } else {
        dispatch(unsetSuccess());
        dispatch(
          setError({ message: "Houve um ou mais erros ao carregar o usuário." })
        );
      }

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      dispatch(
        setError({
          message: error.message,
        })
      );
      dispatch(endLoading());
    }
  };
};

export const getRepos = ({ userName, type, page }) => {
  return async (dispatch) => {
    dispatch(initLoading());
    try {
      let response = await http.get(getGitHubApiUrl(userName, type, page));
      const { status, data, request } = response;

      if (status === 200 || status === 201) {
        const linkHeader = request.getResponseHeader("Link") || "";
        const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);

        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: `${type} carregados com sucesso`,
          })
        );

        const repos = {
          repos: data.map((repo) => ({
            name: repo.name,
            link: repo.html_url,
          })),
          pagination: {
            total: 0,
            activePage: page,
          },
        };

        dispatch(setRepos({ type, repos, totalPagesMatch }));
      }

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      dispatch(
        setError({
          message: error.message,
        })
      );
      dispatch(endLoading());
    }
  };
};
