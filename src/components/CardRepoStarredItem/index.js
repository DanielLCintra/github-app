import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

export const CardRepoStarredItem = ({ style, name, link }) => {
  return (
    <div className="card-item" style={style}>
      <a href={link} target="_blank">
        {name}
      </a>
    </div>
  );
};

CardRepoStarredItem.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  link: PropTypes.string,
};

CardRepoStarredItem.defaultProps = {
  name: "Item",
  link: window.location.href,
};
