import React from "react";
import "./styles.scss";

const Card = ({ children, style }) => {
  return (
    <div className="card-container" style={style}>
      <div className="card">{children}</div>
    </div>
  );
};

export default Card;
