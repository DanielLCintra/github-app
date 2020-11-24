import React from "react";
import "./styles.scss";

const Avatar = ({ image, size = "big" }) => {
  return <img className={`avatar size-${size}`} src={image} />;
};

export default Avatar;
