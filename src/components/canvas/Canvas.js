import React, { useState, useEffect } from "react";
import {
  CanvasWrapper,
  StartGameButton,
  AlreadyAtked,
  WonGamePage,
  WonGamePageButton,
  WonGamePageHeader,
  PlayButton,
  MuteButton,
} from "./CanvasElements";
import CanvasInterfaceRender from "../canvasInterface/CanvasInterfaceRender";
import { OpponentTurn } from "../opponent/OpponentTurn";
import BattleField from "../battlefield/BattleField";
import OpponentBattleField from "../battlefield/OpponentBattleField";
import OpponentCardsHandRender from "../cardsHand/OpponentCardsHandRender";
import CardsHand from "../cardsHand/CardsHand";
import Player from "../player/Player";
import SpellShowRender from "../Spelleffects/SpellShowRender";
import {
  OpponentCardContainer,
  PlayerFiledContainer,
  PlayerCardsContainer,
  PlayCardButton,
} from "../player/PlayerElements";
import { BattlefieldContainer } from "../battlefield/BattleFieldElements";
import useSound from "use-sound";
import backMusic from "../../music/background-music.mp3";

let newCardHp = 0;
let newCardDef = 0;
let AtkCardNewDef = 0;
let AtkCardNewHp = 0;

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
  opponentHp,
  gold,
  oppGold,
  startGameActive,
  deck,
  oppDeck,
  newOpponentHp,
  newPlayerHp,
  newOpponentBattleField,
  spellBattlefieldArr,
  setAttackingCard,
  attackingCard,
  onAttackCardClick,
  setAlreadyAtkedCards,
  attacked,
  silenceBot,
  yourturn,
}) => {
  const [defendingCard, setDefendingCard] = useState([]);
  const [chosenDef, setChosenDef] = useState();
  const [thiscardhasatked, setThiscardhasatked] = useState(false);
  const [enemyTargeted, setEnemeyTarget] = useState(false);

  const [lostgame, setLostGame] = useState(false);
  const [wongame, setWonGame] = useState(false);

  /*   const soundUrl = '../../music/background-music.mp3' */

  const [play] = useSound(backMusic);

  const toggleEnemyTarget = () => setEnemeyTarget(!enemyTargeted);
  const CheckType = (item) => {
    if (item.type === "spell") {
      return false;
    } else {
      return true;
    }
  };

  const attackingFunc = () => {
    if (silenceBot == true) {
      console.log("You are silenced");
      return;
    }
    if (enemyTargeted === true && opponentBattleField.length === 0) {
      if (attacked.includes(attackingCard[0])) {
        setThiscardhasatked(true);
        setTimeout(() => {
          setThiscardhasatked(false);
        }, 2500);
      } else {
        setAlreadyAtkedCards();
        if (attackingCard.length === 0) {
          return;
        }
        let newOppHp = opponentHp - attackingCard[0].atk;
        newOpponentHp(newOppHp);
      }
    }
    if (attackingCard.length == 0 || defendingCard.length == 0) {
      return;
    } else if (attacked.includes(attackingCard[0])) {
      setThiscardhasatked(true);
      setTimeout(() => {
        setThiscardhasatked(false);
      }, 2500);
      return;
    } else {
      setAlreadyAtkedCards();
      DefreduceDefAndHp();
      AtkReduceDefAndHp();
      setAttackingCard([]);
      setDefendingCard([]);
    }
  };

  const reduceOppHp = () => {
    let attack = attackingCard[0].atk;
    let total = defendingCard[0].def + defendingCard[0].hp;
    let damage = attack - total;
    newOpponentHp(opponentHp - damage);
  };

  const reducePlayerHp = () => {
    let attack = defendingCard[0].atk;
    let total = attackingCard[0].def + attackingCard[0].hp;
    let damage = attack - total;
    newPlayerHp(hp - damage);
  };

  const DefreduceDefAndHp = () => {
    if (attackingCard[0].atk <= defendingCard[0].def) {
      newCardDef = defendingCard[0].def - attackingCard[0].atk;
      defendingCard[0].def = newCardDef;
    } else if (attackingCard[0].atk > defendingCard[0].def) {
      let remainAtk = attackingCard[0].atk - defendingCard[0].def;
      newCardHp = defendingCard[0].hp - remainAtk;
      if (newCardHp <= 0) {
        reduceOppHp();
        destroyCard(opponentBattleField, defendingCard);
      } else {
        defendingCard[0].hp = newCardHp;
        defendingCard[0].def = 0;
      }
    }
  };

  const AtkReduceDefAndHp = () => {
    if (defendingCard[0].atk <= attackingCard[0].def) {
      AtkCardNewDef = attackingCard[0].def - defendingCard[0].atk;
      attackingCard[0].def = AtkCardNewDef;
      return newCardDef;
    } else if (defendingCard[0].atk > attackingCard[0].def) {
      let remainAtk = defendingCard[0].atk - attackingCard[0].def;
      AtkCardNewHp = attackingCard[0].hp - remainAtk;
      if (AtkCardNewHp <= 0) {
        reducePlayerHp();
        destroyCard(battlefield, attackingCard);
      } else {
        attackingCard[0].hp = AtkCardNewHp;
        attackingCard[0].def = 0;
      }
    }
  };

  const destroyCard = (arr, card) => {
    let index = arr.findIndex((x) => x.id === card[0].id);
    arr.splice(index, 1);
  };

  const onDefendingCardClick = (e) => {
    let clickedDefendingCard = e.target.closest("div");
    let card = opponentBattleField.filter(
      (x) => x.id === clickedDefendingCard.id
    );
    setDefendingCard(card);
    setChosenDef(card);
  };

  useEffect(() => {
    if (hp <= 0) {
      setLostGame(true);
    } else if (opponentHp <= 0) {
      setWonGame(true);
    }
  }, [hp, opponentHp]);

  const restartGame = () => {
    window.location.reload();
    return false;
  };

  return (
    <CanvasWrapper>
      <OpponentTurn />
      <PlayButton onClick={play}>Music</PlayButton>

      <StartGameButton
        style={buttonShow ? { display: "flex" } : { display: "none" }}
        onClick={startGame}
      >
        START GAME
      </StartGameButton>

      {wongame ? (
        <WonGamePage>
          <WonGamePageHeader>
            Congratulations! You won over the evil bot! You're the man, champ.
          </WonGamePageHeader>
          <WonGamePageButton onClick={restartGame}>
            Restart Game
          </WonGamePageButton>
        </WonGamePage>
      ) : (
        ""
      )}
      {/* {lostgame ? <LostGamePage></LostGamePage> : ''} */}

      {thiscardhasatked ? (
        <AlreadyAtked>This Card Has Already Attacked!</AlreadyAtked>
      ) : (
        ""
      )}
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
          opponentHp={opponentHp}
          deck={deck}
          oppDeck={oppDeck}
          attackingFunc={attackingFunc}
          toggleEnemyTarget={toggleEnemyTarget}
          enemyTargeted={enemyTargeted}
        />
      ) : (
        <></>
      )}

      <SpellShowRender spellBattlefieldArr={spellBattlefieldArr} />

      <OpponentCardContainer>
        <OpponentCardsHandRender opponentCardsinhand={opponentCardsinhand} />
      </OpponentCardContainer>

      <OpponentBattleField
        onDefendingCardClick={onDefendingCardClick}
        opponentBattlefield={opponentBattleField}
      />

      <BattlefieldContainer>
        <BattleField
          yourturn={yourturn}
          onAttackCardClick={onAttackCardClick}
          Battlefield={battlefield}
        />
      </BattlefieldContainer>

      <Player onPlayCard={onPlayCard} hp={hp} />
      <p>{oppGold}</p>

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
