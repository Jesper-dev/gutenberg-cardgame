import React, { useState } from "react";
import {
  CardWrapper,
  CardName,
  CardImg,
  DescriptionText,
  Type,
  CostWrapper,
  Cost,
  StyledCoin,
} from "./DeckBuildSpellElements";

import {
  CardsLeftShow,
  CardsLeftBtnWrap,
  AddRemCard,
  CardDeckWrapper,
} from "./DeckBuildCharacterElements";

const DeckBuildSpellCard = ({
  name,
  img,
  type,
  descText,
  cost,
  value,
  id,
  active,
  onClick,
  removeCard,
  amount,
  addCard,
}) => {
  return (
    <>
      <CardDeckWrapper type={type} name={name} id={id}>
        <CardWrapper id={id} value={value} active={active} onClick={onClick}>
          <CardName>{name}</CardName>
          <CardImg src={img} draggable={false} />
          <Type>[{type}]</Type>
          <DescriptionText>{descText}</DescriptionText>
          <CostWrapper>
            <StyledCoin />
            <Cost> {cost}</Cost>
          </CostWrapper>
        </CardWrapper>

        <CardsLeftBtnWrap>
          <AddRemCard onClick={removeCard}>-</AddRemCard>
          <CardsLeftShow>{amount}/2</CardsLeftShow>
          <AddRemCard onClick={addCard}>+</AddRemCard>
        </CardsLeftBtnWrap>
      </CardDeckWrapper>
    </>
  );
};

export default DeckBuildSpellCard;
