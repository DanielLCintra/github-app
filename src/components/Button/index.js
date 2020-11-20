import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  label,
  onClickHandler,
  rounded = false,
  state = "default",
  size = "default",
  iconSize='lg',
  style,
  icon,
}) => {
  return (
    <button
      className={`button state-${state} size-${size} ${
        rounded ? "rounded" : ""
      }`}
      onClick={() => onClickHandler()}
      style={style}
    >
      {!!label && label}
      {!!icon && <FontAwesomeIcon icon={icon} size={iconSize} />}
    </button>
  );
};

export default Button;
