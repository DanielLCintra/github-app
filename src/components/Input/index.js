import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ placeholder, icon, iconSize }) => {
  return (
    <div className="input-container">
      <input type="text" className="input" placeholder={placeholder} />
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          className="input-icon"
          color="gray"
        />
      )}
    </div>
  );
};

export default Input;
