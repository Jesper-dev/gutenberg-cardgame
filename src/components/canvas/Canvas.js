import React, { useState, useEffect } from "react";
import { CanvasWrapper, StartGameButton, NotEnoughError, EndTurnButton } from "./CanvasElements";
import OpponentTurn from '../opponent/OpponentTurn'
import BattleField from "../battlefield/BattleField";
import Player from "../player/Player";
import _ from "lodash";
import {
  CardContainer,
  PlayerFiledContainer,
  PlayCardButton,
  GoldStatus,
  LeftToolBarContainer,
} from "../player/PlayerElements";

import CharacterCard from "../card/CharacterCard";
import SpellCard from "../card/SpellCard";
// import { CardsArray } from '../cardsarray/CardArray'

const Canvas = ({ array }) => {
  const [cards, setCards] = useState([]);
  const [playercards, setPlayerCards] = useState([]);

  const [buttonShow, setButtonShow] = useState(true);
  const [highlight, setHighlight] = useState(false);

  const [battlefield, setBattlefield] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [enoughgold, setEnoughGold] = useState(false);
  const [gold, setGold] = useState(200);
  const [hp, setHp] = useState(5000);

  useEffect(() => {
    shuffleArray(array);
    setCards(array);
  }, []);

  const CheckType = (item) => {
    if (item.type == "spell") {
      return false;
    } else {
      return true;
    }
  };

  const onCardClick = (e) => {
    let clicked = e.target.closest("div");
    let card = playercards.filter((x) => x.id === clicked.id);
    setSelectedCard(card);
    console.log(selectedCard);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const startGame = () => {
    let newArr = [];
    newArr.push(cards[1], cards[2], cards[3]);
    setPlayerCards(newArr);

    setButtonShow(false);
  };

  const goldErrorReset = () => {
    setEnoughGold(false)
  }

  const onPlayCard = () => {
    console.log(selectedCard[0].cost)
    console.log(gold)
    if (selectedCard[0].cost > gold) {
      setEnoughGold(true)
      setTimeout(goldErrorReset, 3000)
      return
    }
    setGold(gold - selectedCard[0].cost)
    setBattlefield(selectedCard);

    let index = playercards.findIndex((x) => x.id === selectedCard[0].id);

    playercards.splice(index, 1);
  }
};

console.log("gold is: ", gold);

return (
  <CanvasWrapper>
    <OpponentTurn />
    <EndTurnButton>End Turn</EndTurnButton>
    <NotEnoughError style={enoughgold ? { display: 'block' } : { display: 'none' }}>Not Enough Gold!</NotEnoughError>
    <StartGameButton
      style={buttonShow ? { display: "flex" } : { display: "none" }}
      onClick={startGame}
    >
      START GAME
      </StartGameButton>
    <BattleField selectedCard={battlefield} />
    <Player onPlayCard={onPlayCard} hp={hp} />
    <PlayerFiledContainer>
      <LeftToolBarContainer>
        <GoldStatus>{gold} <i class="fas fa-coins" style={{ fontSize: '2rem', marginLeft: '6px' }}></i></GoldStatus>
        <PlayCardButton onClick={onPlayCard}>
          Play Selected Card!
          </PlayCardButton>
      </LeftToolBarContainer>

      <CardContainer>
        {playercards.map(function (item, i) {
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
    </PlayerFiledContainer>
  </CanvasWrapper>
);
};

export default Canvas;
