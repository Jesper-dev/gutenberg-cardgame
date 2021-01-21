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
}) => {
  
  const [highlight, setHighlight] = useState(false);

  const onCardClick = (e) => {
    setHighlight(!highlight);
  };

  // const checkIfAlone = (array) => {
  //   if (array.length < 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // style={highlight ? { border: '4px solid yellow'} : { border: 'none'} }
  return (
    <CardWrapper
      value={value}
      style={highlight ? { border: "5px solid red" } : { border: "" }}
      id={id}
      onClick={onCardClick}
    >
      {/* <button onClick={onPlayCard} style={highlight ? buttonStyle : {display: "none"}}>Play card?</button> */}
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
  );
};

// const buttonStyle = {
//     padding: "5px 5px",
//     background: "none",
//     border: "1px solid black"
// }

export default CharacterCard;
