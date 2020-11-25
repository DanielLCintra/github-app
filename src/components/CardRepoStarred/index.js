import React from "react";
import Card from "../Card";
import "./styles.scss";
import Button from "../Button";
import CardRepoStarredItem from "../CardRepoStarredItem";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Pagination";

const CardRepoStarred = ({ handleClose, title }) => {
  return (
    <Card style={{ height: "25.5em" }}>
      <Button
        icon={faTimes}
        rounded
        state="default"
        size="big"
        style={{ position: "absolute", right: "3em", top: 0, zIndex: 99 }}
        onClickHandler={() => handleClose()}
      />
      <div className="card-container">
        <div className="header-container">{title}</div>

        <div className="content-container">
          <CardRepoStarredItem
            style={{ width: "46%", margin: ".7em" }}
            title="Repositório 1"
          />
          <CardRepoStarredItem
            style={{ width: "46%", margin: ".7em" }}
            title="Repositório 2"
          />
          <CardRepoStarredItem
            style={{ width: "46%", margin: ".7em" }}
            title="Repositório 3"
          />
          <CardRepoStarredItem
            style={{ width: "46%", margin: ".7em" }}
            title="Repositório 4"
          />
        </div>

        <div className="bottom-container">
          <Pagination />
        </div>
      </div>
    </Card>
  );
};

export default CardRepoStarred;
