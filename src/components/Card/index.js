import React from "react";
import "./styles.scss";

const Card = ({ children }) => {
  return (
    <div className="card-container">
      <div className="card">{children}</div>
    </div>
  );
};

export default Card;
