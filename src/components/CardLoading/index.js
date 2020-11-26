import React from "react";
import { Card } from "../Card";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export const CardLoading = () => {
  return (
    <Card>
      <div className="loading-container">
        <FontAwesomeIcon icon={faSpinner} size="6x" spin />
        <span className="loading-text">Buscando</span>
      </div>
    </Card>
  );
};
