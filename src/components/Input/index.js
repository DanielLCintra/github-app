import React, { useState } from "react";
import "./styles.scss";
import { Button } from "../Button";
import PropTypes from "prop-types";

export const Input = ({
  placeholder,
  icon,
  iconSize,
  handleEnter,
  handleClick,
  value,
  handleOnChange,
}) => {
  return (
    <div className="input-container">
      <input
        value={value}
        type="text"
        className="input"
        placeholder={placeholder}
        onChange={(e) => {
          handleOnChange(e);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleEnter(e);
          }
        }}
      />
      {icon && (
        <Button
          icon={icon}
          size={iconSize}
          state="default"
          style={{ position: "absolute", right: "3em" }}
          onClickHandler={() => handleClick(value)}
        />
      )}
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  iconSize: PropTypes.string,
  handleEnter: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: "Placeholder",
  handleEnter: () => alert("Clicou no fechar"),
  handleClick: () => alert("Clicou no fechar"),
  handleOnChange: () => alert("Clicou no fechar"),
};
