import React, { useState, useEffect } from "react";
import { CanvasWrapper } from "./CanvasElements";
import CanvasInterfaceRender from '../canvasInterface/CanvasInterfaceRender'
import OpponentTurn from "../opponent/OpponentTurn";
import BattleField from "../battlefield/BattleField";
import OpponentBattleField from "../battlefield/OpponentBattleField";
import OpponentCardsHandRender from '../cardsHand/OpponentCardsHandRender'
import CardsHand from '../cardsHand/CardsHand'
import Player from "../player/Player";
import LeftToolBar from '../player/LeftToolBar'
import { CardContainer, PlayerFiledContainer, RightToolBarContainer, Hpcontainer, PlayerCardsContainer } from "../player/PlayerElements";
import { BattlefieldContainer } from "../battlefield/BattleFieldElements";


let battlefieldArr = [];
const Canvas = (
  {
    endTurnFunc,
    opponentBattleField,
    opponentCardsinhand,
    startGame,
    cardsinhand,
    buttonShow
  }) => {

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

      <CanvasInterfaceRender enoughgold={enoughgold} buttonShow={buttonShow} endTurnFunc={endTurnFunc} startGame={startGame} />

      <CardContainer>
        <OpponentCardsHandRender opponentCardsinhand={opponentCardsinhand} />
      </CardContainer>

      <OpponentBattleField OpponentBattlefield={opponentBattleField} />

      <BattlefieldContainer>
        <BattleField Battlefield={battlefield} />
      </BattlefieldContainer>


      <Player onPlayCard={onPlayCard} hp={hp} />

      <PlayerFiledContainer>

        <LeftToolBar onPlayCard={onPlayCard} gold={gold} />

        <PlayerCardsContainer>
          <CardsHand cardsinhand={cardsinhand} onCardClick={onCardClick} CheckType={CheckType} />
        </PlayerCardsContainer>

        <RightToolBarContainer>
          <Hpcontainer>{hp}</Hpcontainer>
        </RightToolBarContainer>

      </PlayerFiledContainer>
    </CanvasWrapper>
  );
};

export default Canvas;
