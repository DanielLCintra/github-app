import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { CardUser } from ".";

export default {
  title: "CardUser",
  component: CardUser,
  decorators: [withKnobs],
};

const user = {
  userinfo: {
    username: "John Doe",
    email: "johndoe@servidor.com",
    bio: "Descrição do usuário",
    photo: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
    login: "JohnDoe",
    repos: "00",
    followers: "00",
    following: "00",
  },
  repos: {
    repos: [],
    pagination: {
      total: 1,
      activePage: 1,
    },
  },
  starred: {
    repos: [],
    pagination: {
      total: 1,
      activePage: 1,
    },
  },
};

export const example = () => (
  <CardUser
    user={user}
    handleClose={action("Clicou no fechar")}
    handleClickRepos={action("Clicou no repositórios")}
    handleClickStars={action("Clicou no favoritos")}
  />
);
