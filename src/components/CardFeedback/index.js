import React from "react";
import { Card } from "../Card";
import { faExclamation, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { Button } from "../Button";
import PropTypes from "prop-types";

export const CardFeedback = ({ handleClose, title }) => {
  return (
    <Card clsName="card-feedback">
      <Button
        icon={faTimes}
        rounded
        state="default"
        size="big"
        style={{ position: "absolute", right: "3em", top: 0, zIndex: 99 }}
        onClickHandler={() => handleClose()}
      />
      <div className="feedback-container">
        <div className="feedback-icon">
          <FontAwesomeIcon icon={faExclamation} size="3x" color="#8990A2" />
        </div>
        <span className="feedback-text">{title}</span>
      </div>
    </Card>
  );
};

CardFeedback.propTypes = {
  handleClose: PropTypes.func,
  title: PropTypes.string,
};

CardFeedback.defaultProps = {
  handleClose: () => alert("Clicou no fechar"),
  title: "Usuário não encontrado",
};
