import React, { useState } from 'react'
import {

  NotEnoughError,
  EndTurnButton,
  TurnInicator
} from "../canvas/CanvasElements";
import { RightToolBarContainer, Hpcontainer, GoldStatus, LeftToolBarContainer } from "../player/PlayerElements";
import useSound from 'use-sound'
import swordSfx from "../../music/sword.mp3";
import enemySfx from "../../music/arr.wav";
/* import { PlayCardButton, GoldStatus, LeftToolBarContainer } from "./Player/PlayerElements"; */
import { OpponentDeckWrapper, PlayerDeckWrapper, VisualDeck, OpponentCardsLeft, PlayerCardsLeft, AttackButton, OpponentHpcontainer, StyledSwords, AttackText, EnemyAvatar } from './CanvasInterfaceElements'


const CanvasInterfaceRender = ({
  endTurnFunc,
  startGame,
  enoughgold,
  buttonShow,
  whichTurn,
  gold,
  onPlayCard,
  hp,
  deck,
  oppDeck,
  attackingFunc,
  opponentHp,
  toggleEnemyTarget,
  enemyTargeted
}) => {

  const [swordSound] = useSound(swordSfx);

  const [enemySound] = useSound(enemySfx);



  return (
    <>
      <OpponentDeckWrapper>
        <VisualDeck>
          <OpponentCardsLeft>{oppDeck.length}</OpponentCardsLeft>
        </VisualDeck>
      </OpponentDeckWrapper>
      <PlayerDeckWrapper>
        <VisualDeck>
          <PlayerCardsLeft>{deck.length}</PlayerCardsLeft>
        </VisualDeck>
      </PlayerDeckWrapper>

      <LeftToolBarContainer>
        <GoldStatus>
          {gold}{" "}
          <i
            className="fas fa-coins"
            style={{ fontSize: "2rem", marginLeft: "6px" }}
          ></i>
        </GoldStatus>
      </LeftToolBarContainer>

      <EndTurnButton onClick={endTurnFunc}>End Turn</EndTurnButton>

      <NotEnoughError
        style={enoughgold ? { display: "block" } : { display: "none" }}
      >
        Not Enough Gold!
      </NotEnoughError>

      <EnemyAvatar onMouseEnter={enemySound} style={!enemyTargeted ? { filter: 'brightness(75%) contrast(150%)' } : { filter: 'brightness(50%) contrast(150%)' }} onClick={toggleEnemyTarget} />
      <OpponentHpcontainer>{opponentHp}</OpponentHpcontainer>

      <AttackText>Attack!</AttackText>
      <StyledSwords onMouseEnter={swordSound} onClick={attackingFunc} />

      <RightToolBarContainer>
        <Hpcontainer>{hp}</Hpcontainer>
      </RightToolBarContainer>

      <TurnInicator>{whichTurn}</TurnInicator>
    </>
  );
};

export default CanvasInterfaceRender

/*
const StyledSwords = styled(Swords)`
  position: absolute;
  z-index: 999;
  bottom: 6.2%;
  right: 28%;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
` */