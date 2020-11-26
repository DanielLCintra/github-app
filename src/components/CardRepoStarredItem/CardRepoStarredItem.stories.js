import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { CardRepoStarredItem } from ".";

export default {
  title: "CardRepoStarredItem",
  component: CardRepoStarredItem,
  decorators: [withKnobs],
};

export const example = () => (
  <CardRepoStarredItem
    name={text("Informe o texto do item", "Item")}
    link={text("Informe o link do item", "Item")}
  />
);
