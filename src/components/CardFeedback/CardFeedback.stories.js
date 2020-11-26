import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { CardFeedback } from ".";

export default {
  title: "CardFeedback",
  component: CardFeedback,
  decorators: [withKnobs],
};

export const example = () => (
  <CardFeedback
    handleClose={action("Clicou no fechar")}
    title={text("Informe o texto do feedback", "Usuário não encontrado")}
  />
);
