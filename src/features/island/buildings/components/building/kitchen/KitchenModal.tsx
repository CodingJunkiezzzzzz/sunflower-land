import React from "react";

import { Panel } from "components/ui/Panel";
import { Modal } from "react-bootstrap";
import { getKeys } from "features/game/types/craftables";

import { Recipes } from "../../ui/Recipes";
import {
  Consumable,
  ConsumableName,
  CONSUMABLES,
} from "features/game/types/consumables";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCook: (name: ConsumableName) => void;
}
export const KitchenModal: React.FC<Props> = ({ isOpen, onCook, onClose }) => {
  const kitchenRecipes = getKeys(CONSUMABLES).reduce((acc, name) => {
    if (CONSUMABLES[name].building !== "Kitchen") {
      return acc;
    }

    return [...acc, CONSUMABLES[name]];
  }, [] as Consumable[]);

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Panel
        bumpkinParts={{
          body: "Light Brown Farmer Potion",
          hair: "Explorer Hair",
          pants: "Lumberjack Overalls",
          shirt: "Blue Farmer Shirt",
          tool: "Axe",
          background: "Farm Background",
          shoes: "Black Farmer Boots",
        }}
      >
        <Recipes recipes={kitchenRecipes} onCook={onCook} onClose={onClose} />
      </Panel>
    </Modal>
  );
};
