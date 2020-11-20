import React from "react";
import "./styles.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from '../Button';


const TopHeader = () => {
  return (
    <div className="top-header">
        <Button
          icon={faBars}
          rounded
          state="default"
          size="big"
          style={{position: 'absolute', left: '1.5em'}}
          onClickHandler={() => alert("Clicou no botão!")}
        />
        <div className="title">Github App</div>
    </div>
  );
};

export default TopHeader;
