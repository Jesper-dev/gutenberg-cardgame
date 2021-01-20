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

const SpellCard = ({ name, img, type, descText, cost, value, id }) => {
  //style={highlight ? { border: '3px solid red'} : { border: 'none'} } onClick={onCardClick}

  const [highlight, setHighlight] = useState(false);
  const [inPlay, setInPlay] = useState([]);

  const onCardClick = () => {
    setHighlight(!highlight);
  };

  return (
    <>
      <CardWrapper
        id={id}
        value={value}
        style={highlight ? { border: "5px solid yellow" } : { border: "" }}
        onClick={onCardClick}
      >
        {/* <button style={highlight ? buttonStyle : {display: "none"}}>Play card?</button> */}
        <CardName>{name}</CardName>
        <CardImg src={img} />
        <Type>[{type}]</Type>
        <DescriptionText>{descText}</DescriptionText>
        <CostWrapper>
          <Cost>Cost: {cost}</Cost>
        </CostWrapper>
      </CardWrapper>
    </>
  );
};

const buttonStyle = {
  padding: "5px 5px",
  background: "none",
  border: "1px solid black",
};

export default SpellCard;
