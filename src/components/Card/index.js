import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

export const Card = ({ children, style }) => {
  return (
    <div className="card-container" style={style}>
      <div className="card">{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};
