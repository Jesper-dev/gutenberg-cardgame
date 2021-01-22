import React, { useState } from "react";
/* import SelectReducer from "./SelectReducer"; */
import {
  CardWrapper,
  CardName,
  CardImg,
  AtkDefWrapper,
  Atk,
  Def,
  DescriptionText,
  Type,
  HPWrapper,
  HP,
} from "./CharacterCardBattleFieldElements";


const CharacterCardBattleField = ({
  name,
  img,
  type,
  atk,
  def,
  descText,
  hp,
  id,
  value,
  onAttackCardClick,
  onDefendingCardClick,
  onClick,
  active,
  item,
  playerClick,
  setChosenAtk,
  onPlayerClick
}) => {
 
  return (
    <CardWrapper
      value={value}
      style={active ? { border: "5px solid blue" } : { border: "" }}
      id={id}
      onClick={(e) => {onClick(); onAttackCardClick(e)} }
    >

      <CardName>{name}</CardName>
      <CardImg src={img} />
      <Type>[{type}]</Type>
      <AtkDefWrapper>
        <Atk>Atk: {atk}</Atk>
        <Def>Def: {def}</Def>
      </AtkDefWrapper>
      <DescriptionText>{descText}</DescriptionText>
      <HPWrapper>
        <HP>HP: {hp}</HP>
      </HPWrapper>
    </CardWrapper>
  );
};

export default CharacterCardBattleField;
