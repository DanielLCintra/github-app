import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Aside,
  TopHeader,
  Input,
  CardUser,
  CardLoading,
  CardRepoStarred,
  CardFeedback,
} from "../../components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getRepos, getUser } from "../../redux/middleware";
import { setUser } from "../../redux/slices/user.slice";
import { unsetError } from "../../redux/slices/generics.slice";
import { setHistoric, addHistoric } from "../../redux/slices/historic.slice";
import lf from "localforage";

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  const isLoading = useSelector((state) => state.genericReducer.loading);
  const error = useSelector((state) => state.genericReducer.error);
  const historic = useSelector((state) => state.historicReducer.historic);

  let [showRepos, setShowRepos] = useState(false);
  let [showAside, setShowAside] = useState(false);
  let [showStarred, setShowStarred] = useState(false);
  let [value, setValue] = useState("");

  useEffect(async () => {
    const persistedHistoric = await lf.getItem("historic");
    if (persistedHistoric) {
      dispatch(setHistoric(persistedHistoric));
    }
  }, []);

  const search = (value) => {
    dispatch(setUser({ user: {} }));
    dispatch(getUser(value));
    dispatch(addHistoric({ id: +new Date(), value: value }, historic));
    setShowRepos(false);
    setShowStarred(false);
    dispatch(unsetError());
  };

  return (
    <div className="main-container">
      {showAside && (
        <Aside
          label="Histórico"
          handleClose={() => {
            setShowAside(false);
          }}
          items={historic}
          handleItemClick={(item) => {
            setValue(item.value);
            search(item.value);
          }}
        />
      )}

      <TopHeader handleClick={() => setShowAside(true)} />

      <Input
        placeholder="Digite o nome de um usuário para realizar a busca"
        icon={faSearch}
        iconSize="4x"
        handleEnter={(e) => {
          search(e.target.value);
        }}
        value={value}
        handleOnChange={(e) => {
          setValue(e.target.value);
        }}
        handleClick={(value) => {
          search(value);
        }}
      />

      {!!user.userinfo.username && (
        <CardUser
          user={user}
          handleClose={() => {
            dispatch(setUser({ user: {} }));
            setShowRepos(false);
            setShowStarred(false);
          }}
          handleClickRepos={() => {
            dispatch(
              getRepos({
                userName: user.userinfo.login,
                type: "repos",
                page: 1,
              })
            );
            setShowRepos(true);
          }}
          handleClickStars={() => {
            dispatch(
              getRepos({
                userName: user.userinfo.login,
                type: "starred",
                page: 1,
              })
            );
            setShowStarred(true);
          }}
        />
      )}

      {!!error && (
        <CardFeedback
          handleClose={() => {
            dispatch(unsetError());
          }}
        />
      )}

      {showRepos && !isLoading && (
        <CardRepoStarred
          style={{ marginTop: "5em" }}
          title="Repositórios"
          type="repos"
          handleClose={() => setShowRepos(false)}
          repos={user.repos.repos}
          pagination={user.repos.pagination}
          handlePagination={(data) => {
            let page =
              data.action === "next"
                ? data.activePage + 1
                : data.action === "previous"
                ? data.activePage - 1
                : data.activePage;
            page = page <= 0 ? 1 : page;
            dispatch(
              getRepos({ userName: user.userinfo.login, type: data.type, page })
            );
          }}
        />
      )}

      {showStarred && !isLoading && (
        <CardRepoStarred
          style={{ marginTop: showRepos ? "8em" : "5em" }}
          title="Favoritos"
          type="starred"
          handleClose={() => setShowStarred(false)}
          repos={user.starred.repos}
          pagination={user.starred.pagination}
          handlePagination={(data) => {
            let page =
              data.action === "next"
                ? data.activePage + 1
                : data.action === "previous"
                ? data.activePage - 1
                : data.activePage;
            page = page <= 0 ? 1 : page;
            dispatch(
              getRepos({ userName: user.userinfo.login, type: data.type, page })
            );
          }}
        />
      )}

      {isLoading && <CardLoading />}
    </div>
  );
};

export default Home;
