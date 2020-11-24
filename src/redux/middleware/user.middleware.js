import {
  initLoading,
  endLoading,
  setError,
  unsetError,
  setSuccess,
  unsetSuccess,
} from "../slices/generics.slice";
import http from "../api/http";
import { setUser } from "../slices/user.slice";

export const getUser = (userName) => {
  return async (dispatch) => {
    dispatch(initLoading());
    try {
      let response = await http.get(`users/${userName}`);
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
