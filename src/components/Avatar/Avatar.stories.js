import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { Avatar } from ".";

export default {
  title: "Avatar",
  component: Avatar,
  decorators: [withKnobs],
  parameters: {
    size: {
      size: ["big", "medium", "small"],
    },
  },
};

export const example = () => (
  <Avatar
    image={text(
      "Informe uma url de imagem para pré-visualizar",
      "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    )}
    size={select("Selecione o tamanho", ["big", "medium", "small"], false)}
  />
);
