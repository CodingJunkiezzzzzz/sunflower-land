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
export const BakeryModal: React.FC<Props> = ({ isOpen, onCook, onClose }) => {
  const cakeRecipes = getKeys(CONSUMABLES).reduce((acc, name) => {
    if (CONSUMABLES[name].building !== "Bakery") {
      return acc;
    }

    return [...acc, CONSUMABLES[name]];
  }, [] as Consumable[]);

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Panel
        bumpkinParts={{
          body: "Goblin Potion",
          hair: "Sun Spots",
          pants: "Lumberjack Overalls",
          shirt: "Red Farmer Shirt",
          tool: "Golden Spatula",
          background: "Farm Background",
          hat: "Chef Hat",
          shoes: "Black Farmer Boots",
        }}
      >
        <Recipes recipes={cakeRecipes} onCook={onCook} onClose={onClose} />
      </Panel>
    </Modal>
  );
};
