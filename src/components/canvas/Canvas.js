import React, { useState, useEffect } from "react";
import {
  CanvasWrapper,
  StartGameButton,
  NotEnoughError,
  EndTurnButton,
} from "./CanvasElements";
import OpponentTurn from "../opponent/OpponentTurn";
import BattleField from "../battlefield/BattleField";
import OpponentBattleField from "../battlefield/OpponentBattleField";
import Player from "../player/Player";
import {
  CardContainer,
  PlayerFiledContainer,
  PlayCardButton,
  GoldStatus,
  LeftToolBarContainer,
  RightToolBarContainer,
  Hpcontainer,
} from "../player/PlayerElements";

import CharacterCard from "../card/CharacterCard";
import SpellCard from "../card/SpellCard";
// import { CardsArray } from '../cardsarray/CardArray'
let battlefieldArr = [];
const Canvas = (
  { array, 
    shuffleArray, 
    opponentDeck, 
    endTurnFunc, 
    opponentBattleField, 
    opponentCardsinhand, 
    startGame, 
    cardsinhand,
    buttonShow
  }) => {
  


  const [highlight, setHighlight] = useState(false);

  const [battlefield, setBattlefield] = useState([]);
  
  const [selectedCard, setSelectedCard] = useState([]);
  const [enoughgold, setEnoughGold] = useState(false);
  const [gold, setGold] = useState(200);
  const [hp, setHp] = useState(5000);

  const CheckType = (item) => {
    if (item.type == "spell") {
      return false;
    } else {
      return true;
    }
  };

  const onCardClick = (e) => {
    let clicked = e.target.closest("div");
    let card = cardsinhand.filter((x) => x.id === clicked.id);
    setSelectedCard(card);
  };

  const goldErrorReset = () => {
    setEnoughGold(false);
  };

  const onPlayCard = () => {
    if (selectedCard[0].cost > gold) {
      setEnoughGold(true);
      setTimeout(goldErrorReset, 3000);
      return;
    }
    battlefieldArr.push(selectedCard[0]);
    setGold(gold - selectedCard[0].cost);
    setBattlefield(battlefieldArr);

    let index = cardsinhand.findIndex((x) => x.id === selectedCard[0].id);

    cardsinhand.splice(index, 1);
  };

  return (
    <CanvasWrapper>
      <OpponentTurn />
      <EndTurnButton onClick={endTurnFunc}>End Turn</EndTurnButton>
      <NotEnoughError
        style={enoughgold ? { display: "block" } : { display: "none" }}
      >
        Not Enough Gold!
      </NotEnoughError>
      <StartGameButton
        style={buttonShow ? { display: "flex" } : { display: "none" }}
        onClick={startGame}
      >
        START GAME
      </StartGameButton>

      <CardContainer>
            {opponentCardsinhand.map(function (item, i) {
              return CheckType(item) ? (
                <div key={i} onClick={onCardClick}>
                  <CharacterCard
                    highlight={highlight}
                    id={item.id}
                    value={i}
                    name={item.name}
                    img={item.img}
                    type={item.type}
                    atk={item.atk}
                    def={item.def}
                    descText={item.descText}
                    hp={item.hp}
                    cost={item.cost}
                  />
                </div>
              ) : (
                <div key={i} onClick={onCardClick}>
                  <SpellCard
                    id={item.id}
                    key={i}
                    name={item.name}
                    img={item.img}
                    type={item.type}
                    descText={item.descText}
                    cost={item.cost}
                  />
                </div>
              );
            })}

    </CardContainer>
    


      <OpponentBattleField OpponentBattlefield={opponentBattleField} />
      
      <BattleField Battlefield={battlefield} />
      <Player onPlayCard={onPlayCard} hp={hp} />
      <PlayerFiledContainer>
        <LeftToolBarContainer>
          <GoldStatus>
            {gold}{" "}
            <i
              class="fas fa-coins"
              style={{ fontSize: "2rem", marginLeft: "6px" }}
            ></i>
          </GoldStatus>
          <PlayCardButton onClick={onPlayCard}>
            Play Selected Card!
          </PlayCardButton>

          <CardContainer>
            {cardsinhand.map(function (item, i) {
              return CheckType(item) ? (
                <div key={i} onClick={onCardClick}>
                  <CharacterCard
                    highlight={highlight}
                    id={item.id}
                    value={i}
                    name={item.name}
                    img={item.img}
                    type={item.type}
                    atk={item.atk}
                    def={item.def}
                    descText={item.descText}
                    hp={item.hp}
                    cost={item.cost}
                  />
                </div>
              ) : (
                <div key={i} onClick={onCardClick}>
                  <SpellCard
                    id={item.id}
                    key={i}
                    name={item.name}
                    img={item.img}
                    type={item.type}
                    descText={item.descText}
                    cost={item.cost}
                  />
                </div>
              );
            })}
          </CardContainer>
        </LeftToolBarContainer>
        <RightToolBarContainer>
          <Hpcontainer>{hp}</Hpcontainer>
        </RightToolBarContainer>
      </PlayerFiledContainer>
    </CanvasWrapper>
  );
};

export default Canvas;
