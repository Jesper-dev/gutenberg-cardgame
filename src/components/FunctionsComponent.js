import React, { useState, useEffect } from "react";
import Canvas from "./canvas/Canvas";
import { CardsArray } from "./cardsarray/CardArray";

let opponentBattleArr = [];
let battlefieldArr = [];

const FunctionsComponent = () => {
  const [buttonShow, setButtonShow] = useState(true);

  const [deck, setDeck] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);
  //   const [opponentCards, setOpponentCards] = useState([]);
  const [yourturn, setYourTurn] = useState(true);
  const [opponentBattleField, setOppoentBattleField] = useState([]);
  const [opponentCardsinhand, setopponentCardsinhand] = useState([]);
  const [selected, setSelected] = useState([]);
  const [whichTurn, setWhichTurn] = useState('Your Turn!');
  const [battlefield, setBattlefield] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [enoughgold, setEnoughGold] = useState(false);
  const [gold, setGold] = useState(200);
  const [hp, setHp] = useState(5000);
  const [startGameActive, setStartGameActive] = useState(false);


  const [cardsinhand, setCardsInHand] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const makeOpponentDeck = (array) => {
    shuffleArray(array);
    setOpponentDeck(array);
  };

  useEffect(() => {
    shuffleArray(CardsArray);
    setDeck(CardsArray);
  }, []);

  const EndTurn = () => {
    setYourTurn(false);
    setWhichTurn('Opponents Turn')

    setTimeout(() => {
      startOpponentTurn(opponentDeck)
    }, 500)
    
    playCard(opponentCardsinhand);

    setTimeout(() => {
      setYourTurn(true);
      setWhichTurn('Your Turn!')
      
    }, 1000);

    setTimeout(() => {
      startPlayerTurn(deck)
    }, 500);

    console.log("Deck is: ", deck)
  };

  const startPlayerTurn = (arr) => {
    
    setGold(gold + 150)

    let currentHand = cardsinhand;
    let card = arr[0]
    currentHand.push(card)
    setCardsInHand(currentHand);
  }

  const startOpponentTurn = (arr) => {
    setGold(200)
    let currentOppHand = opponentCardsinhand;
    let card = arr[0]
    arr.splice(0, 1)
    currentOppHand.push(card)
    setopponentCardsinhand(currentOppHand);
  }

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

  const onCardClick = (e) => {
    let clicked = e.target.closest("div");
    let card = cardsinhand.filter((x) => x.id === clicked.id);
    setSelectedCard(card);
    console.log("Card is clicked")
  };

  const playCard = (arr) => {
    opponentBattleArr.push(arr[0]);
    setOppoentBattleField(opponentBattleArr);
    arr.splice(0, 1);
    console.log("Lol")
    
  };

  const startGame = () => {
    let playerArr = [];
    let opponentArr = [];
    playerArr = deck.splice(0, 3);
    opponentArr = opponentDeck.splice(0, 3);
    setCardsInHand(playerArr);
    setopponentCardsinhand(opponentArr);
    setButtonShow(false);
    setStartGameActive(true)
    console.log(startGameActive)
  };

  useEffect(() => {
    makeOpponentDeck(CardsArray);
  }, []);

  return (
    <>
      <Canvas
        buttonShow={buttonShow}
        array={CardsArray}
        shuffleArray={shuffleArray}
        opponentDeck={opponentDeck}
        endTurnFunc={EndTurn}
        opponentBattleField={opponentBattleField}
        opponentCardsinhand={opponentCardsinhand}
        cardsinhand={cardsinhand}
        startGame={startGame}
        whichTurn={whichTurn}
        onPlayCard={onPlayCard}
        onCardClick={onCardClick}
        battlefield={battlefield}
        enoughgold={enoughgold}
        gold={gold}
        hp={hp}
        startGameActive={startGameActive}
        deck={deck}
        oppDeck={opponentDeck}
      />
    </>
  );
};

export default FunctionsComponent;
