import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { Pagination } from ".";

export default {
  title: "Pagination",
  component: Pagination,
  decorators: [withKnobs],
};

export const example = () => (
  <Pagination
    pageLink={text("Insira o link da página", "")}
    onClick={action("Clicou na página")}
    paginationData={{ activePage: 1, total: 10 }}
  />
);
