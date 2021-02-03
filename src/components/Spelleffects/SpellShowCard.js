import React, { useState } from "react";
import {
  CardWrapper,
  CardName,
  CardImg,
  DescriptionText,
  Type,
  CostWrapper,
  Cost,
} from "./SpellShowCardElements";

const SpellShowCard = ({ name, img, type, descText, cost, value, id }) => {
  //style={highlight ? { border: '3px solid red'} : { border: 'none'} } onClick={onCardClick}
/* 
  const [highlight, setHighlight] = useState(false);

  const onCardClick = () => {
    setHighlight(!highlight);
  }; */

  return (
    <>
      <CardWrapper
        id={id}
        value={value}
      /*   style={highlight ? { border: "5px solid yellow" } : { border: "" }} */
  /*       onClick={onCardClick} */
      >
        {/* <button style={highlight ? buttonStyle : {display: "none"}}>Play card?</button> */}
        <CardName>{name}</CardName>
        <CardImg src={img} draggable={false} />
        <Type>[{type}]</Type>
        <DescriptionText>{descText}</DescriptionText>
      {/*   <CostWrapper>
          <Cost>Cost: {cost}</Cost>
        </CostWrapper> */}
      </CardWrapper>
    </>
  );
};

export default SpellShowCard;
