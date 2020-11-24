import React, { useState } from "react";
import "./styles.scss";
import Button from "../Button";

const Input = ({ placeholder, icon, iconSize, handleEnter, handleClick }) => {
  let [value, setValue] = useState("");

  return (
    <div className="input-container">
      <input
        value={value}
        type="text"
        className="input"
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
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
          style={{ position: "absolute", right: "3em" }}
          onClickHandler={() => handleClick(value)}
        />
      )}
    </div>
  );
};

export default Input;
