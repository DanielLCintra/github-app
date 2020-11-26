import React from "react";
import { Card } from "../Card";
import { Avatar } from "../Avatar";
import "./styles.scss";
import { Button } from "../Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const CardUser = ({
  user,
  handleClose,
  handleClickRepos,
  handleClickStars,
}) => {
  return (
    <Card>
      <Button
        icon={faTimes}
        rounded
        state="default"
        size="big"
        style={{ position: "absolute", right: "3em", top: 0, zIndex: 99 }}
        onClickHandler={() => handleClose()}
      />
      <div className="card-user-container">
        <div className="card-user-header-container">PERFIL</div>

        <div className="card-user-content-container">
          <div className="main-title">
            <Avatar image={user.userinfo.photo} size="big" />

            <div className="main-title-text">
              <div className="main-title-text-name">
                {user.userinfo.username}
              </div>
              <span className="main-title-text-email">
                {user.userinfo.email}
              </span>
              <span className="main-title-text-user">
                @{user.userinfo.login}
              </span>
            </div>
          </div>

          <div className="details">
            <div className="details-text">
              <p>Repositórios: {user.userinfo.repos}</p>
              <p>Seguidores: {user.userinfo.followers}</p>
              <p>Seguindo: {user.userinfo.following}</p>
            </div>
            <p>{user.userinfo.bio}</p>

            <div className="details-buttons">
              <Button
                rounded
                state="accent"
                label="Repositórios"
                style={{ width: "48%", padding: ".7em" }}
                onClickHandler={() => handleClickRepos()}
              />
              <Button
                rounded
                state="accent"
                label="Favoritos"
                style={{ width: "48%", padding: ".7em" }}
                onClickHandler={() => handleClickStars()}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

CardUser.propTypes = {
  user: PropTypes.object,
  handleClose: PropTypes.func,
  handleClickRepos: PropTypes.func,
  handleClickStars: PropTypes.func,
};

CardUser.defaultProps = {
  handleClose: () => alert("Clicou no fechar"),
  handleClickRepos: () => alert("Clicou no fechar"),
  handleClickStars: () => alert("Clicou no fechar"),
};
