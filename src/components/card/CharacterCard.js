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
  StyledCoin,
  RightWrapper,
  LeftWrapper,
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
  active,
}) => {
  return (
    <>
      <CardWrapper value={value} active={active} id={id} onClick={onClick}>
        <CardName>{name}</CardName>
        <CardImg src={img} draggable={false} />
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
        <CostHpWrapper>
          <LeftWrapper>
            <StyledCoin />
            <Cost>{cost}</Cost>
          </LeftWrapper>

          <RightWrapper>
            <StyledHearth />
            <HP>{hp}</HP>
          </RightWrapper>
        </CostHpWrapper>
      </CardWrapper>
    </>
  );
};

export default CharacterCard;
