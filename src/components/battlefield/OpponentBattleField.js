import React, { useState } from "react";
import OppCharBattleField from "../card/OppCharBattleField";
import SpellCardBattleField from "../card/SpellCardBattleField";
import {
  BattlefieldContainer,
  BattlefieldInnerContainer,
} from "./OpponentBattleFieldElements";

const OpponentBattleField = ({ opponentBattlefield, onDefendingCardClick, yourturn, chosenDefHigh, setChosenDefHigh }) => {


  const highlightCard = (item) => {
    if (!yourturn) {
      return
    }
    if (item == chosenDefHigh) {
      setChosenDefHigh()
    } else {
      setChosenDefHigh(item)
    }
  }

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
          {opponentBattlefield.map(function (item, i) {
            return CheckType(item) ? (
              <div key={i}>
                <OppCharBattleField
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
                  active={item === chosenDefHigh}
                  onClick={() => highlightCard(item)}
                  onDefendingCardClick={onDefendingCardClick}
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
                    onDefendingCardClick={onDefendingCardClick}
                  />
                </div>
              );
          })}
        </BattlefieldInnerContainer>
      </BattlefieldContainer>
    </>
  );
};

export default OpponentBattleField;
