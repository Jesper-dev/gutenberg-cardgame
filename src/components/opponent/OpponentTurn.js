import React from "react";

export const OpponentTurn = ({ yourturn }) => {
  if (yourturn === false) {
    console.log("Now AI will take over");
  }

  return <></>;
};


export const reduceHpCard = (cardToAttack, cardToAttackWith) => {
  let remainAtk = cardToAttack.atk - cardToAttackWith.def;
  let newHp = cardToAttackWith.hp - remainAtk;
  cardToAttackWith.hp = newHp;
  cardToAttackWith.def = 0;
}

export const reduceDefCard = (cardToAttack, cardToAttackWith) => {
  let newCardDef = cardToAttackWith.def - cardToAttack.atk
  cardToAttackWith.def = newCardDef;
}
