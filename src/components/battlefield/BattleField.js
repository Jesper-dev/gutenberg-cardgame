import React, { useState } from "react";
import CharacterCardBattleField from "../card/CharacterCardBattleField";
import SpellCardBattleField from "../card/SpellCardBattleField";
import {
  BattlefieldContainer,
  BattlefieldInnerContainer,
} from "./BattleFieldElements";

const BattleField = ({ Battlefield, onAttackCardClick }) => {
  const [chosen, setChosen] = useState();

  const CheckType = (item) => {
    if (item.type === "spell") {
      return false;
    } else {
      return true;
    }
  };


  return (
    <>
      <BattlefieldContainer>
        <BattlefieldInnerContainer>
          {Battlefield.map(function (item, i) {
            return CheckType(item) ? (
              <div key={i}>
                <CharacterCardBattleField
                  id={item.id}
                  value={i}
                  name={item.name}
                  img={item.img}
                  type={item.type}
                  atk={item.atk}
                  def={item.def}
                  descText={item.descText}
                  hp={item.hp}
                  onAttackCardClick={onAttackCardClick}
                  active={item === chosen}
                  onClick={() => setChosen(item)}
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
