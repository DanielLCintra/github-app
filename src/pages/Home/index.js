import React from "react";
import { Button, TopHeader, Input, Card } from "../../components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <TopHeader />

      <Input
        placeholder="Digite o nome de um usuário para realizar a busca"
        icon={faSearch}
        iconSize="lg"
      />

      <Card />
    </>
  );
};

export default Home;
