import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { CardLoading } from ".";

export default {
  title: "CardLoading",
  component: CardLoading,
  decorators: [withKnobs],
};

export const example = () => (
  <CardLoading
    handleClose={action("Clicou no fechar")}
    title={text("Informe o texto do feedback", "Usuário não encontrado")}
  />
);
