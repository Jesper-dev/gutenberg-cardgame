import React, { useState, useEffect } from "react";
import { CanvasWrapper, StartGameButton } from "./CanvasElements";
import CanvasInterfaceRender from "../canvasInterface/CanvasInterfaceRender";
import OpponentTurn from "../opponent/OpponentTurn";
import BattleField from "../battlefield/BattleField";
import OpponentBattleField from "../battlefield/OpponentBattleField";
import OpponentCardsHandRender from "../cardsHand/OpponentCardsHandRender";
import CardsHand from "../cardsHand/CardsHand";
import Player from "../player/Player";
import {
  OpponentCardContainer,
  PlayerFiledContainer,
  RightToolBarContainer,
  Hpcontainer,
  PlayerCardsContainer,
  PlayCardButton
} from "../player/PlayerElements";
import { BattlefieldContainer } from "../battlefield/BattleFieldElements";

// let battlefieldArr = [];
const Canvas = ({
  endTurnFunc,
  opponentBattleField,
  opponentCardsinhand,
  startGame,
  cardsinhand,
  buttonShow,
  whichTurn,
  onPlayCard,
  onCardClick,
  battlefield,
  enoughgold,
  hp,
  gold,
  startGameActive,
  deck,
  oppDeck
}) => {

  const CheckType = (item) => {
    if (item.type == "spell") {
      return false;
    } else {
      return true;
    }
  };


  return (
    <CanvasWrapper>
      <OpponentTurn />
      <StartGameButton style={buttonShow ? { display: "flex" } : { display: "none" }} onClick={startGame}>
                START GAME
      </StartGameButton>
            
     
      {startGameActive ? (
         <CanvasInterfaceRender
         enoughgold={enoughgold}
         buttonShow={buttonShow}
         endTurnFunc={endTurnFunc}
         startGame={startGame}
         whichTurn={whichTurn}
         onPlayCard={onPlayCard} 
         gold={gold}
         hp={hp}
         deck={deck}
         oppDeck={oppDeck}
       />
      ) : (
        <></>
      )}

      <OpponentCardContainer>
        <OpponentCardsHandRender opponentCardsinhand={opponentCardsinhand} />
      </OpponentCardContainer>

      <OpponentBattleField OpponentBattlefield={opponentBattleField} />

      <BattlefieldContainer>
        <BattleField Battlefield={battlefield} />
      </BattlefieldContainer>

      <Player onPlayCard={onPlayCard} hp={hp} />

      <PlayerFiledContainer>

        <PlayerCardsContainer>
          <CardsHand
            cardsinhand={cardsinhand}
            onCardClick={onCardClick}
            CheckType={CheckType}
          />
        </PlayerCardsContainer>
        {startGameActive ? (
            <PlayCardButton onClick={onPlayCard}>
            Play Selected Card!
          </PlayCardButton>
       
      ) : (
        <></>
      )}
  
      </PlayerFiledContainer>
    </CanvasWrapper>
  );
};

export default Canvas;
