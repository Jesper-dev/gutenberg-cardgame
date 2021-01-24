import React, { useState, useEffect } from "react";
import BattleField from "./battlefield/BattleField";
import OpponentBattleField from "./battlefield/OpponentBattleField";
import Canvas from "./canvas/Canvas";
import { CardsArray } from "./cardsarray/CardArray";
import { OpponentCardArray } from "./cardsarray/OpponentCardArray";
import {DrawOneCard} from "./Spelleffects/Spells"

let opponentBattleArr = [];
let battlefieldArr = [];
let spellBattlefieldArr = [];

const FunctionsComponent = () => {
  const [buttonShow, setButtonShow] = useState(true);

  const [deck, setDeck] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);
  //   const [opponentCards, setOpponentCards] = useState([]);
  const [yourturn, setYourTurn] = useState(true);
  

  const [cardsinhand, setCardsInHand] = useState([]);
  const [opponentCardsinhand, setopponentCardsinhand] = useState([]);
  
  const [whichTurn, setWhichTurn] = useState('Your Turn!');

  const [battlefield, setBattlefield] = useState([]);
  const [opponentBattleField, setOppoentBattleField] = useState([]);
  const [spellBattlefield, setSpellBattlefield] = useState([]);

  const [selectedCard, setSelectedCard] = useState([]);
  

  const [gold, setGold] = useState(200);
  const [oppGold, setOppGold] = useState(200)
  const [enoughgold, setEnoughGold] = useState(false);

  const [hp, setHp] = useState(5000);
  const [opponentHp, setOpponentHp] = useState(5000);

  const [startGameActive, setStartGameActive] = useState(false);

  

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
    
    if(opponentCardsinhand.length > 2) {
      setTimeout(() => {
        playCard();
      }, 1000);
      setTimeout(() => {
        playCard();
      }, 2000);
      setTimeout(() => {
        playCard();
      }, 3000);

    } else {
      playCard();
    }
    
    aiAttack();

    setTimeout(() => {
      deleteSpellFromArr(spellBattlefieldArr)
    }, 1000);

    setTimeout(() => {
      setYourTurn(true);
      setWhichTurn('Your Turn!')
    }, 3000);

    setTimeout(() => {
      startPlayerTurn()
    }, 5000);
  };

  //On start of player turn
  const startPlayerTurn = () => {
    setGold(gold + 150)

    if(cardsinhand.length > 3){
      deck.splice(0, 1)
    } else {
      let currentHand = cardsinhand;
      let card = deck[0]
      deck.splice(0, 1)
      currentHand.push(card)
      setCardsInHand(currentHand);
    }
    
    setSelectedCard([])
  }

  const startOpponentTurn = () => {
    setOppGold(oppGold + 150)

    if(opponentCardsinhand.length > 3){
      opponentDeck.splice(0, 1)
    } else {
      let currentOppHand = opponentCardsinhand;
      let card = opponentDeck[0]
      opponentDeck.splice(0, 1)
      currentOppHand.push(card)
      setopponentCardsinhand(currentOppHand);
    }
    
  }

  const goldErrorReset = () => setEnoughGold(false)
  
  const checkBattlefieldLength = (arr, card) => {
    if(arr.length === 3){
      return;
    } else {
      arr.push(card)
      setGold(gold - card.cost);
      setBattlefield(arr);
    
      let index = cardsinhand.findIndex((x) => x.id === selectedCard[0].id);
      cardsinhand.splice(index, 1);
    }
  }

  //När en spelare spelar ett kort
  const onPlayCard = () => {
    if (yourturn == false || selectedCard.length === 0){
      return
    }
    if (selectedCard[0].cost > gold) {
      setEnoughGold(true);
      setTimeout(goldErrorReset, 3000);
      return;
    }
    
    checkCardType()

    if(selectedCard[0].type === "spell"){
      spellBattlefieldArr.push(selectedCard[0])
      setSpellBattlefield(spellBattlefieldArr)
      let index = cardsinhand.findIndex((x) => x.id === selectedCard[0].id);
      cardsinhand.splice(index, 1);
    } else {
      checkBattlefieldLength(battlefieldArr, selectedCard[0])
    }

    setTimeout(() => {
        deleteSpellFromArr(spellBattlefieldArr)
    }, 500);
  };

  const deleteSpellFromArr = () => {
    setTimeout(() => {
      spellBattlefieldArr.splice(0)
      setSpellBattlefield(spellBattlefield)
    }, 2000);
  }

  const checkCardType = () => {
    if(selectedCard[0].type === "spell"){
      switch (selectedCard[0].name) {
        case "Quire":
          DrawOneCard(deck, cardsinhand);  
        break;
        case "Money Making Idea":
          setTimeout(() => {
            setGold(gold + 100)
          }, 500) 
        break;

        default:
          break;
      }
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
    
    console.log(oppGold)
    let number = Math.floor(Math.random() * Math.floor(opponentCardsinhand.length));
    
    if(opponentCardsinhand[number].cost > oppGold){
      return;
    }

    if(opponentCardsinhand[number].type === "spell"){
      spellBattlefieldArr.push(opponentCardsinhand[number])
      
      setOppGold(gold - opponentCardsinhand[number].cost)
      switch (opponentCardsinhand[number].name) {
        case "Quire":
          DrawOneCard(opponentDeck, opponentCardsinhand);
        break;
        case "Money Making Idea":
          setTimeout(() => {
            setGold(gold + 100)
          }, 500) 
          
        break;

        default:
          break;
      }

      

    } else {
      if(opponentBattleField.length === 3){
        return;
      } else {
        setOppGold(gold - opponentCardsinhand[number].cost)
        opponentBattleArr.push(opponentCardsinhand[number]);
        setOppoentBattleField(opponentBattleArr);
        opponentCardsinhand.splice(number, 1);
      }
    }
  };

  const aiAttack = () => {
    if(opponentBattleField.length === 0 || battlefield.length === 0){
      return;
    }

    let cardToAttackWithNumber = Math.floor(Math.random() * Math.floor(opponentBattleField.length));
    let cardToAttackWith = opponentBattleField[cardToAttackWithNumber]
    let cardToAttackToNumber = Math.floor(Math.random() * Math.floor(battlefield.length));
    let cardToAttack = battlefield[cardToAttackToNumber]

    let attack = cardToAttackWith.atk;
    let totalHp = cardToAttack.def + cardToAttack.hp;
    
    if(attack > totalHp){
      let index = battlefield.findIndex((x) => x.id === cardToAttack.id);
      battlefield.splice(index, 1)
    }
    
  }

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
        spellBattlefieldArr={spellBattlefieldArr}
        
      />
    </>
  );
};

export default FunctionsComponent;
