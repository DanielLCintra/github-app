import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Dots = () => <span>...</span>;

export const Page = ({ page, pageLink, onClick, paginationData, index }) => {
  const Component = page === "..." ? Dots : "a";

  const handleClick = !onClick
    ? null
    : (e) => {
        e.preventDefault();
        onClick(page);
      };

  return (
    <li
      key={index}
      className={`pagination-item ${
        paginationData.activePage === page ? "active" : ""
      }`}
      style={paginationData.activePage === page ? { color: "red" } : null}
    >
      <Component
        href={pageLink}
        onClick={handleClick}
        className="pagination-link"
      >
        {page}
      </Component>
    </li>
  );
};

Page.propTypes = {
  page: PropTypes.string,
  pageLink: PropTypes.string,
  onClick: PropTypes.func,
  paginationData: PropTypes.object,
  index: PropTypes.number,
};

Page.defaultProps = {
  page: "1",
  pageLink: "http://uol.com.br",
  onClick: () => alert("Clicou na página"),
  paginationData: { activePage: 1, total: 10 },
  index: 1,
};
