import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

export const Avatar = ({ image, size = "big" }) => {
  return <img className={`avatar size-${size}`} src={image} />;
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Avatar.defaultProps = {
  image: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
  size: "big",
};
