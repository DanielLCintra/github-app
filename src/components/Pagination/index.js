import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import Page from "../Page";
import paginate from "../../utils/paginate";

const Pagination = ({
  style,
  paginationData,
  onClick,
  title,
  pageLink = "",
}) => {
  return (
    <div className="pagination-container" style={style}>
      <div className="pagination-left">
        <Button
          icon={faChevronLeft}
          rounded
          state="default"
          size="lg"
          onClickHandler={() =>
            onClick({
              activePage: paginationData.activePage,
              action: "previous",
            })
          }
          color="gray"
        />

        {/* <p>
          {(paginationData.activePage - 1) * 4 + 1} -{" "}
          {paginationData.activePage * 4 > paginationData.total_itens
            ? paginationData.total_itens
            : paginationData.activePage * 4}
        </p>
        <p>{title}</p> */}
      </div>

      <div className="pages">
        <ul className="pagination">
          {paginate({
            total: paginationData.total,
            activePage: paginationData.activePage,
          }).map((page, index) => (
            <li
              key={index}
              className={`pagination-item ${
                paginationData.activePage === page ? "active" : ""
              }`}
              style={
                paginationData.activePage === page ? { color: "red" } : null
              }
            >
              <Page
                page={page}
                pageLink={pageLink.replace("%page%", page)}
                onClick={() =>
                  onClick({
                    activePage: page,
                    action: "page",
                  })
                }
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="pagination-right">
        {/* <p>Páginas</p>
        <p>
          {paginationData.activePage} - {paginationData.total}
        </p> */}
        <Button
          icon={faChevronRight}
          rounded
          state="default"
          size="lg"
          onClickHandler={() =>
            onClick({ activePage: paginationData.activePage, action: "next" })
          }
          color="gray"
        />
      </div>
    </div>
  );
};

export default Pagination;
