import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { CardRepoStarred } from ".";

export default {
  title: "CardRepoStarred",
  component: CardRepoStarred,
  decorators: [withKnobs],
};

export const example = () => (
  <CardRepoStarred
    handleClose={action("Clicou no fechar")}
    title={text("Informe o título do card", "Título")}
    handlePagination={action("Clicou na paginação")}
  />
);
