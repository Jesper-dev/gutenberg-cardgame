import React, { useState, useEffect } from "react";
import Canvas from "./canvas/Canvas";
import { CardsArray } from "./cardsarray/CardArray";
import { OpponentCardArray } from "./cardsarray/OpponentCardArray";

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
  // const [selected, setSelected] = useState([]);
  const [whichTurn, setWhichTurn] = useState('Your Turn!');
  const [battlefield, setBattlefield] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [enoughgold, setEnoughGold] = useState(false);
  const [gold, setGold] = useState(200);
  const [hp, setHp] = useState(5000);
  const [opponentHp, setOpponentHp] = useState(5000);
  const [startGameActive, setStartGameActive] = useState(false);


  const [cardsinhand, setCardsInHand] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const newOpponentHp = newHp =>  setOpponentHp(newHp)
  const newPlayerHp = newHp =>  setHp(newHp)
  
  const newOpponentBattleField = (arr) => setOppoentBattleField(arr)

  const makeOpponentDeck = (array) => {
    shuffleArray(array);
    setOpponentDeck(array);
  };

  useEffect(() => {
    shuffleArray(CardsArray);
    setDeck(CardsArray);
  }, []);

  
  

  const EndTurn = () => {
    if (yourturn == false){
      return
    }
    setYourTurn(false);
    setWhichTurn('Opponents Turn')
    startOpponentTurn()
    
    
    playCard();

    setTimeout(() => {
      setYourTurn(true);
      setWhichTurn('Your Turn!')
    }, 3000);

    setTimeout(() => {
      startPlayerTurn()
    }, 3000);
  };

  //On start of player turn
  const startPlayerTurn = () => {
    setGold(gold + 150)
    let currentHand = cardsinhand;
    let card = deck[0]
    deck.splice(0, 1)
    currentHand.push(card)
    setCardsInHand(currentHand);
    setSelectedCard([])
  }

  const startOpponentTurn = () => {
    setGold(gold + 150)
    let currentOppHand = opponentCardsinhand;
    let card = opponentDeck[0]
    opponentDeck.splice(0, 1)
    currentOppHand.push(card)
    setopponentCardsinhand(currentOppHand);
  }

  const goldErrorReset = () => {
    setEnoughGold(false);
  };

  //När en spelare spelar ett kort
  const onPlayCard = () => {
    if (yourturn == false){
      return
    }
    if(selectedCard.length === 0){
      return
    }
    if (selectedCard[0].cost > gold) {
      setEnoughGold(true);
      setTimeout(goldErrorReset, 3000);
      return;
    }
    checkCardType()
    battlefieldArr.push(selectedCard[0]);
    setGold(gold - selectedCard[0].cost);
    setBattlefield(battlefieldArr);

    let index = cardsinhand.findIndex((x) => x.id === selectedCard[0].id);
    cardsinhand.splice(index, 1);
  };

  const checkCardType = () => {
    if(selectedCard[0].type === "spell"){
      console.log("A spell was played")
    } else {
      console.log("A character card was played")
    }
  }

  const onCardClick = (e) => {
    if (yourturn == false){
      return
    }
    let clicked = e.target.closest("div");
    let card = cardsinhand.filter((x) => x.id === clicked.id);
    setSelectedCard(card);
  };

  //När en motståndare/bot spelar ett kort
  const playCard = () => {
    
    let number = Math.floor(Math.random() * Math.floor(3));
    opponentBattleArr.push(opponentCardsinhand[number]);

    if(opponentCardsinhand[number].type === "spell"){
      console.log("Opp played a spell")
    } else {
      console.log("Opp played a character")
    }
    setOppoentBattleField(opponentBattleArr);
    opponentCardsinhand.splice(number, 1);
  };


  //När man startar gamet
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
    makeOpponentDeck(OpponentCardArray);
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
        opponentHp={opponentHp}
        newPlayerHp={newPlayerHp}
        newOpponentHp={newOpponentHp}
        startGameActive={startGameActive}
        deck={deck}
        oppDeck={opponentDeck}
        yourturn={yourturn}
        newOpponentBattleField={newOpponentBattleField}
        
      />
    </>
  );
};

export default FunctionsComponent;
