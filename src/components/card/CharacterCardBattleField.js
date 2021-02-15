import React, { useState } from "react";
/* import SelectReducer from "./SelectReducer"; */
import {
  CardWrapper,
  CardName,
  CardImg,
  AtkDefWrapper,
  DescriptionText,
  Type,
  StyledHearth,
  HPWrapper,
  HP,
} from "./CharacterCardBattleFieldElements";
import {
  CostHpWrapper,
  Atk,
  Def,
  StyledShield,
  StyledSword,
  StyledCoin,
  RightWrapper,
  LeftWrapper,
} from "./CharacterCardElements";

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
  onPlayerClick,
}) => {
  return (
    <CardWrapper
      value={value}
      style={active ? { border: "5px solid blue" } : { border: "" }}
      id={id}
      onClick={(e) => {
        onClick();
        onAttackCardClick(e);
      }}
    >
      <CardName>{name}</CardName>
      <CardImg src={img} />
      <Type>[{type}]</Type>

      <AtkDefWrapper>
        <LeftWrapper>
          <StyledSword />
          <Atk>{atk}</Atk>
        </LeftWrapper>
        <RightWrapper>
          <StyledShield />
          <Def>{def}</Def>
        </RightWrapper>
      </AtkDefWrapper>

      <DescriptionText>{descText}</DescriptionText>

      <HPWrapper>
        <StyledHearth />
        <HP>{hp}</HP>
      </HPWrapper>
    </CardWrapper>
  );
};

export default CharacterCardBattleField;
