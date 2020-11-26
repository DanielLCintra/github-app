import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { TopHeader } from ".";

export default {
  title: "TopHeader",
  component: TopHeader,
  decorators: [withKnobs],
};

export const example = () => (
  <TopHeader
    handleClick={action("Clicou no botão do topo")}
    title={text("Insira o título do topo", "Título")}
  />
);
