import React from "react";
import "./styles.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import { Page } from "../Page";
import paginate from "../../utils/paginate";
import PropTypes from "prop-types";

export const Pagination = ({
  style,
  paginationData,
  onClick,
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
      </div>

      <div className="pages">
        <ul className="pagination">
          {paginate({
            total: paginationData.total,
            activePage: paginationData.activePage,
          }).map((page, index) => (
            <Page
              page={page}
              pageLink={pageLink.replace("%page%", page)}
              onClick={() =>
                onClick({
                  activePage: page,
                  action: "page",
                })
              }
              paginationData={paginationData}
              index={index}
            />
          ))}
        </ul>
      </div>

      <div className="pagination-right">
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

Pagination.propTypes = {
  style: PropTypes.object,
  paginationData: PropTypes.object,
  onClick: PropTypes.func,
  pageLink: PropTypes.string,
};

Pagination.defaultProps = {
  paginationData: { activePage: 1, total: 10 },
  onClick: () => alert("Clicou na paginação"),
  pageLink: "",
};
