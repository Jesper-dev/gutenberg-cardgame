import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { createStore, store } from "redux";
/* import SelectReducer from "./SelectReducer"; */
import {
  CardWrapper,
  CardName,
  CardImg,
  AtkDefWrapper,
  Atk,
  Def,
  DescriptionText,
  Type,
  HPWrapper,
  HP,
} from "./CharacterCardElements";
import Player from "../player/Player";

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
}) => {
  let array = [];
  const [highlight, setHighlight] = useState(false);

  const onCardClick = (e) => {
    setHighlight(!highlight);
  };

  const checkIfAlone = (array) => {
    if (array.length < 1) {
      return true;
    } else {
      return false;
    }
  };

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
      <CardImg src={img} />
      <Type>[{type}]</Type>
      <AtkDefWrapper>
        <Atk>Atk: {atk}</Atk>
        <Def>Def: {def}</Def>
      </AtkDefWrapper>
      <DescriptionText>{descText}</DescriptionText>
      <HPWrapper>
        <HP>HP: {hp}</HP>
      </HPWrapper>
    </CardWrapper>
  );
};

// const buttonStyle = {
//     padding: "5px 5px",
//     background: "none",
//     border: "1px solid black"
// }

export default CharacterCard;
