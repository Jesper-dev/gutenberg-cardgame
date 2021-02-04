import React, { useState } from "react";
import {
  NotEnoughError,
  EndTurnButton,
  TurnInicator,
} from "../canvas/CanvasElements";
import {
  RightToolBarContainer,
  Hpcontainer,
  GoldStatus,
  LeftToolBarContainer,
} from "../player/PlayerElements";
import useSound from "use-sound";
import swordSfx from "../../music/sword.mp3";
import enemySfx from "../../music/arr.wav";
/* import { PlayCardButton, GoldStatus, LeftToolBarContainer } from "./Player/PlayerElements"; */
import {
  OpponentDeckWrapper,
  PlayerDeckWrapper,
  VisualDeck,
  OpponentCardsLeft,
  PlayerCardsLeft,
  AttackButton,
  OpponentHpcontainer,
  StyledSwords,
  AttackText,
  EnemyAvatar,
  StyledGold,
  BattleMove,
  BattleMoveText,
  StyledScroll,
} from "./CanvasInterfaceElements";

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
  enemyTargeted,
  round,
  battleMove,
  battlelog,
  yourturn,
}) => {
  const [swordSound] = useSound(swordSfx, { volume: 0.18 });

  const [enemySound] = useSound(enemySfx, { volume: 0.18 });

  console.log(battleMove);
  console.log(battlelog);
  return (
    <>
      <BattleMove>
        {battlelog.map((item, i) => {
          if (item.typeTwo === "character") {
            return (
              <BattleMoveText key={i}>
                {item.whoPlayed} played {item.name}
              </BattleMoveText>
            );
          } else {
            return (
              <BattleMoveText key={i}>
                {item.type === "spell" || item.typeTwo === "spell"
                  ? `${item.whoPlayed} casted ${item.name}`
                  : `${item.attacker} attacked ${item.deffender}`}
              </BattleMoveText>
            );
          }
        })}
      </BattleMove>

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
          {gold} <StyledGold />
        </GoldStatus>
      </LeftToolBarContainer>

      <EndTurnButton onClick={endTurnFunc}>End Turn</EndTurnButton>

      <NotEnoughError
        style={enoughgold ? { display: "block" } : { display: "none" }}
      >
        Not Enough Gold!
      </NotEnoughError>

      <EnemyAvatar
        onMouseEnter={enemySound}
        style={
          !enemyTargeted
            ? { filter: "brightness(75%) contrast(150%)" }
            : { filter: "brightness(50%) contrast(150%)" }
        }
        onClick={toggleEnemyTarget}
      />
      <OpponentHpcontainer>{opponentHp}</OpponentHpcontainer>

      <AttackText>Attack!</AttackText>
      <StyledSwords onMouseEnter={swordSound} onClick={attackingFunc} />

      <RightToolBarContainer>
        <Hpcontainer>{hp}</Hpcontainer>
      </RightToolBarContainer>

      <TurnInicator font="1.7rem" left="30px" top="45px">
        {whichTurn}
      </TurnInicator>
      <TurnInicator font="3rem" left="30px" top="-35px">
        Round {round}
      </TurnInicator>
    </>
  );
};

export default CanvasInterfaceRender;

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
