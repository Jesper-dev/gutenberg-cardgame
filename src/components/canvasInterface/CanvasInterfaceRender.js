import React, { useState } from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
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
import Settings from "../settings/Settings";
import useSound from "use-sound";
import swordSfx from "../../music/sword.mp3";
import enemySfx from "../../music/arr.wav";
import backMusic from "../../music/background-music.mp3";

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
  const [volume, setVolume] = useState(0.2);
  const [sfxVolume, setSfxVolume] = useState(0.2);

  const adjustVolume = (e) => {
    

    if (e.target.id == "sfx-minus") {
      if (sfxVolume < 0.1) return
    
      setSfxVolume(sfxVolume - 0.1);
      
    } else if (e.target.id == "sfx-plus") {

      if (sfxVolume > 0.9) return
      setSfxVolume(sfxVolume + 0.1);
      
    } else if (e.target.id == "volume-plus") {
      
      if (volume > 0.9) return;
      setVolume(volume + 0.1);

    } else if (e.target.id == "volume-minus") {

      if (volume < 0.1) return;
      setVolume(volume - 0.1);
      
    }
  };

  const [swordTimeOut, setSwordTimeOut] = useState(true)
  const [enemyTimeOut, setEnemyTimeOut] = useState(true)

  const SwordHover = () => {
    if (swordTimeOut) {
      swordSound()
      setSwordTimeOut(false)
      setTimeout(() => {
        setSwordTimeOut(true)
      }, 5000)
    }
  }
  const EnemyHover = () => {
    if (enemyTimeOut) {
      enemySound()
      setEnemyTimeOut(false)
      setTimeout(() => {
        setEnemyTimeOut(true)
      }, 8000)
    }
  }

  const [swordSound] = useSound(swordSfx, { volume: sfxVolume });
  const [enemySound] = useSound(enemySfx, { volume: sfxVolume });

  
  const [play, { stop, isPlaying }] = useSound(backMusic, { volume: volume });

  return (
    <>
      <Settings active={isPlaying} play={play} stop={stop} volume={volume} sfxVolume={sfxVolume} adjustVolume={adjustVolume} />
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
        onMouseEnter={() => EnemyHover()}
        style={
          !enemyTargeted
            ? { filter: "brightness(75%) contrast(150%)" }
            : { filter: "brightness(50%) contrast(150%)" }
        }
        onClick={toggleEnemyTarget}
      />
      <OpponentHpcontainer>{opponentHp}</OpponentHpcontainer>

      <AttackText>Attack!</AttackText>
      <StyledSwords onMouseEnter={() => SwordHover()} onClick={attackingFunc} />

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
