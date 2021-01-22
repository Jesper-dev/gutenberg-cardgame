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


const OppCharBattleField = ({
  name,
  img,
  type,
  atk,
  def,
  descText,
  hp,
  id,
  value,
  onDefendingCardClick,
  active,
  onClick
}) => {
  // onDefendingCardClick || setChosen
  return (
    <CardWrapper
      value={value}
      style={active ? { border: "5px solid red" } : { border: "" }}
      id={id}
      onClick={(e) => {onClick(); onDefendingCardClick(e)} }
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

export default OppCharBattleField;
