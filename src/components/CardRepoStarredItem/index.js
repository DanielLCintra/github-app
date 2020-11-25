import React from "react";
import "./styles.scss";

const CardRepoStarredItem = ({ style, title }) => {
  return (
    <div className="card-item" style={style}>
      {title}
    </div>
  );
};

export default CardRepoStarredItem;
