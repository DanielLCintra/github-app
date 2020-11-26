import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const Button = ({
  label,
  onClickHandler,
  rounded = false,
  state = "default",
  size = "default",
  iconSize = "lg",
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
      {!!icon && <FontAwesomeIcon icon={icon} size={iconSize} color="gray" />}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  rounded: PropTypes.bool,
  state: PropTypes.string,
  size: PropTypes.string,
  iconSize: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.any,
};

Button.defaultProps = {
  label: "",
  onClickHandler: () => alert("Clicou no botão"),
  rounded: true,
  state: "accent",
  size: "big",
};
