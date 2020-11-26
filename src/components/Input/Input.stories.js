import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { Input } from ".";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Input",
  component: Input,
  decorators: [withKnobs],
};

export const example = () => (
  <Input
    placeholder={text("placeholder do input", "Placeholder")}
    icon={faSearch}
    iconSize={select(
      "Informe o tamanho do icone",
      ["xs", "lg", "2x", "4x", "6x"],
      false
    )}
    handleEnter={action("Apertou o enter")}
    handleClick={action("Clicou no icone")}
    value={text("valor do input", "")}
    handleOnChange={action("Input Alterado")}
  />
);
