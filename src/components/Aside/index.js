import React from "react";
import "./styles.scss";
import Button from "../Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Aside = ({ label, handleClose, style, items = [], handleItemClick }) => {
  return (
    <div className="aside" style={style}>
      <div className="aside-header">
        <p>{label}</p>
        <Button
          icon={faTimes}
          rounded
          state="default"
          size="big"
          style={{
            position: "absolute",
            right: "1em",
            top: "0.7em",
            zIndex: 99,
          }}
          onClickHandler={() => handleClose()}
        />
      </div>

      <div className="aside-content">
        {items.length > 0 &&
          items.map((item) => (
            <p key={item.id} onClick={() => handleItemClick(item)}>
              {item.value}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Aside;
