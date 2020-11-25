import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  TopHeader,
  Input,
  CardUser,
  CardLoading,
  CardRepoStarred,
} from "../../components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../../redux/middleware";
import { setUser } from "../../redux/slices/user.slice";

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  const isLoading = useSelector((state) => state.genericReducer.loading);

  let [showRepos, setShowRepos] = useState(false);
  let [showStarred, setShowStarred] = useState(false);
  return (
    <>
      <TopHeader />

      <Input
        placeholder="Digite o nome de um usuário para realizar a busca"
        icon={faSearch}
        iconSize="4x"
        handleEnter={(e) => {
          dispatch(setUser({ user: {} }));
          dispatch(getUser(e.target.value));
        }}
        handleClick={(value) => {
          dispatch(setUser({ user: {} }));
          dispatch(getUser(value));
        }}
      />

      {isLoading && <CardLoading />}
      {!!user.userinfo.username && (
        <CardUser
          user={user}
          handleClose={() => dispatch(setUser({ user: {} }))}
          handleClickRepos={() => setShowRepos(true)}
          handleClickStars={() => setShowStarred(true)}
        />
      )}

      {showRepos && (
        <CardRepoStarred
          title="Repositórios"
          handleClose={() => setShowRepos(false)}
        />
      )}

      {showStarred && (
        <CardRepoStarred
          title="Favoritos"
          handleClose={() => setShowStarred(false)}
        />
      )}
    </>
  );
};

export default Home;
