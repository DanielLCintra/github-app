import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Button } from ".";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

export const withText = () => (
  <Button
    label={text("Insira a label do botão", "botão")}
    onClickHandler={action("Clicou no botão")}
    rounded={select("Informe se o botão será redondo", [true, false], true)}
    state={select(
      "Informe a cor do botão",
      ["accent", "default", "dark"],
      "accent"
    )}
    size={select(
      "Informe o tamanho do botão",
      ["big", "medium", "small"],
      "big"
    )}
    iconSize={select(
      "Informe o tamanho do icone",
      ["xs", "lg", "2x", "4x", "6x"],
      false
    )}
  />
);

export const withIcon = () => (
  <Button
    onClickHandler={action("Clicou no botão")}
    rounded={select("Informe se o botão será redondo", [true, false], true)}
    state={select(
      "Informe a cor do botão",
      ["accent", "default", "dark"],
      "default"
    )}
    size={select(
      "Informe o tamanho do botão",
      ["big", "medium", "small"],
      "big"
    )}
    icon={faSearch}
    iconSize={select(
      "Informe o tamanho do icone",
      ["xs", "lg", "2x", "4x", "6x"],
      false
    )}
  />
);
