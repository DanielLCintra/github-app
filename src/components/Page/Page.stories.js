import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { Page } from ".";

export default {
  title: "Page",
  component: Page,
  decorators: [withKnobs],
};

export const example = () => (
  <Page
    page={text("Insira o número da página", "1")}
    pageLink={text("Insira o link da página", "")}
    onClick={action("Clicou na página")}
    paginationData={{ activePage: 1, total: 10 }}
    index={1}
  />
);
