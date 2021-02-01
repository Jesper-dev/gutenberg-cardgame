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
  Cost,
  StyledShield,
  StyledSword,
  StyledHearth,
  DefWrapper,
  AtkWrapper
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
          <AtkWrapper>
          <StyledSword />
          <Atk>{atk}</Atk>
          </AtkWrapper>
          <DefWrapper>
          <StyledShield />
          <Def>{def}</Def>
          </DefWrapper>
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
