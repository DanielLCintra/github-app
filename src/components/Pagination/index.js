import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ style }) => {
  return (
    <div className="pagination-container" style={style}>
      <div className="pagination-left">
        <FontAwesomeIcon icon={faChevronLeft} size="lg" color="gray" />
        <p>1 - 4</p>
        <p>Repositórios</p>
      </div>

      <div className="pagination-right">
        <p>Páginas</p>
        <p>1 - 4</p>
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="gray" />
      </div>
    </div>
  );
};

export default Pagination;
