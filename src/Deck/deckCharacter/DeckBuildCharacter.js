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
  CardDeckWrapper,
  CardsLeftShow,
  CardsLeftBtnWrap,
  AddRemCard,
} from "./DeckBuildCharacterElements";

const DeckBuildCharacter = ({
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
  number,
  addCard,
  removeCard,
}) => {
  return (
    <>
      <CardDeckWrapper type={type} name={name} id={id}>
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
        <CardsLeftBtnWrap>
          <AddRemCard onClick={removeCard}>-</AddRemCard>
          <CardsLeftShow>{number}/2</CardsLeftShow>
          <AddRemCard onClick={addCard}>+</AddRemCard>
        </CardsLeftBtnWrap>
      </CardDeckWrapper>
    </>
  );
};

export default DeckBuildCharacter;
