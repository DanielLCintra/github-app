import React from "react";
import "./styles.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import PropTypes from "prop-types";

export const TopHeader = ({ handleClick, title }) => {
  return (
    <div className="top-header">
      <Button
        icon={faBars}
        rounded
        state="default"
        size="big"
        style={{ position: "absolute", left: "1.5em" }}
        onClickHandler={() => handleClick()}
      />
      <div className="title">{title}</div>
    </div>
  );
};

TopHeader.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

TopHeader.defaultProps = {
  title: "Github App",
  handleClick: () => alert("Clicou no botão do topo"),
};
