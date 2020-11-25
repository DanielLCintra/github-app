import React from "react";
import "./styles.scss";

const CardRepoStarredItem = ({ style, name, link }) => {
  return (
    <div className="card-item" style={style}>
      <a href={link} target="_blank">
        {name}
      </a>
    </div>
  );
};

export default CardRepoStarredItem;
