import React from "react";
import Card from "../Card";
import "./styles.scss";
import Button from "../Button";
import CardRepoStarredItem from "../CardRepoStarredItem";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Pagination";

const CardRepoStarred = ({
  handleClose,
  title,
  repos = [],
  pagination,
  handlePagination,
  type,
}) => {
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
          {repos.length > 0 &&
            repos.map((repo) => (
              <CardRepoStarredItem
                key={repo.name}
                style={{ width: "46%", margin: ".7em" }}
                name={repo.name}
                link={repo.link}
              />
            ))}
        </div>

        <div className="bottom-container">
          <Pagination
            title={title}
            paginationData={pagination}
            onClick={(data) => handlePagination({ ...data, type })}
          />
        </div>
      </div>
    </Card>
  );
};

export default CardRepoStarred;
