import React from "react";
import { Card } from "../Card";
import "./styles.scss";
import { Button } from "../Button";
import { CardRepoStarredItem } from "../CardRepoStarredItem";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "../Pagination";
import PropTypes from "prop-types";

export const CardRepoStarred = ({
  handleClose,
  title,
  repos,
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

CardRepoStarred.propTypes = {
  handleClose: PropTypes.func,
  title: PropTypes.string,
  repos: PropTypes.array,
  pagination: PropTypes.object,
  handlePagination: PropTypes.func,
  type: PropTypes.string,
};

CardRepoStarred.defaultProps = {
  handleClose: () => alert("clicou no fechar"),
  title: "Título",
  repos: [{}],
  pagination: { total: 1, activePage: 1 },
  handlePagination: () => alert("clicou na paginação"),
  type: "repos",
};
