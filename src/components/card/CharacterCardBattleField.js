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
  active
}) => {
  
  return (
    <CardWrapper
      value={value}
      style={active ? { border: "5px solid blue" } : { border: "" }}
      id={id}
      onClick={onAttackCardClick || onDefendingCardClick}
      onClick={onClick}
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

// const buttonStyle = {
//     padding: "5px 5px",
//     background: "none",
//     border: "1px solid black"
// }

export default CharacterCardBattleField;
