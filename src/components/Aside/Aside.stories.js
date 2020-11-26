import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Aside } from "./";

export default {
  title: "Aside",
  component: Aside,
  decorators: [withKnobs],
  argTypes: {
    handleClose: { action: "Clicou no fechar" },
    handleItemClick: { action: "Clicou no item" },
  },
};

const items = [
  { id: "1", value: "Item 1" },
  { id: "2", value: "Item 2" },
  { id: "3", value: "Item 3" },
];

export const example = () => (
  <Aside
    label={text("Título do Aside", "Aside")}
    handleClose={action("Clicou no fechar")}
    style={{}}
    items={items}
    handleItemClick={action("Clicou no item")}
  />
);
