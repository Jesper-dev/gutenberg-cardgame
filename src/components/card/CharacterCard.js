import React, { useState } from "react";

import {
  CardWrapper,
  CardName,
  CardImg,
  AtkDefWrapper,
  Atk,
  Def,
  DescriptionText,
  Type,
  CostHpWrapper,
  HP,
  Cost
} from "./CharacterCardElements";


const CharacterCard = ({
  name,
  img,
  type,
  atk,
  def,
  descText,
  hp,
  id,
  value,
  cost,
  cardsinhand,
  onClick,
  active
}) => {

  return (
    <>
      <CardWrapper
        value={value}
        /*  style={active ? { border: "5px solid blue" } : { border: "" }} */
        active={active}
        id={id}
        onClick={onClick}
      >
        <CardName>{name}</CardName>
        <CardImg src={img} draggable={false} />
        <Type>[{type}]</Type>
        <AtkDefWrapper>
          <Atk>Atk: {atk}</Atk>
          <Def>Def: {def}</Def>
        </AtkDefWrapper>
        <DescriptionText>{descText}</DescriptionText>
        <CostHpWrapper>
          <Cost>Cost: {cost}</Cost>
          <HP>HP: {hp}</HP>
        </CostHpWrapper>
      </CardWrapper>
    </>
  );
};

export default CharacterCard;
