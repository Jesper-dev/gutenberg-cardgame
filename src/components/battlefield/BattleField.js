import React from "react";
import CharacterCardBattleField from "../card/CharacterCardBattleField";
import SpellCardBattleField from "../card/SpellCardBattleField";
import {
  BattlefieldContainer,
  BattlefieldInnerContainer,
} from "./BattleFieldElements";

const BattleField = ({ selectedCard }) => {
  const CheckType = (item) => {
    if (item.type == "spell") {
      return false;
    } else {
      return true;
    }
  };

  //   console.log(selectedCard);

  return (
    <>
      <BattlefieldContainer>
        <BattlefieldInnerContainer>
          {selectedCard.map(function (item, i) {
            return CheckType(item) ? (
              <div key={i}>
                <CharacterCardBattleField
                  /* highlight={highlight} */
                  id={item.id}
                  value={i}
                  name={item.name}
                  img={item.img}
                  type={item.type}
                  atk={item.atk}
                  def={item.def}
                  descText={item.descText}
                  hp={item.hp}
                />
              </div>
            ) : (
              <div key={i}>
                <SpellCardBattleField
                  id={item.id}
                  key={i}
                  name={item.name}
                  img={item.img}
                  type={item.type}
                  descText={item.descText}
                  cost={item.cost}
                />
              </div>
            );
          })}
        </BattlefieldInnerContainer>
      </BattlefieldContainer>
    </>
  );
};

export default BattleField;
