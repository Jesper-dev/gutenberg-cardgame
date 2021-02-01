import React, { useState } from "react";
import {
  CardWrapper,
  CardName,
  CardImg,
  DescriptionText,
  Type,
  CostWrapper,
  Cost,
} from "./SpellCardElements";

const SpellCard = ({ name, img, type, descText, cost, value, id, active, onClick }) => {

  return (
    <>
      <CardWrapper
        id={id}
        value={value}
        active={active}
        onClick={onClick}
      >
        <CardName>{name}</CardName>
        <CardImg src={img} draggable={false} />
        <Type>[{type}]</Type>
        <DescriptionText>{descText}</DescriptionText>
        <CostWrapper>
          <Cost>Cost: {cost}</Cost>
        </CostWrapper>
      </CardWrapper>
    </>
  );
};

export default SpellCard;
