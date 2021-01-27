import React, { useState, useEffect } from "react";
import BattleField from "./battlefield/BattleField";
import OpponentBattleField from "./battlefield/OpponentBattleField";
import Canvas from "./canvas/Canvas";
import { CardsArray } from "./cardsarray/CardArray";
import { OpponentCardArray } from "./cardsarray/OpponentCardArray";
import { DrawOneCard, HealEveryCard, tp1 } from "./Spelleffects/Spells"
import {startOpponentTurn, reduceHpCard, reduceDefCard} from "./opponent/OpponentTurn"
import { forEach } from "lodash";

let opponentBattleArr = [];
let battlefieldArr = [];
let spellBattlefieldArr = [];
let attackedArray = [];

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
  const [attackingCard, setAttackingCard] = useState([])
  const [attacked, setAttacked] = useState([]);
  

  const [gold, setGold] = useState(200);
  const [oppGold, setOppGold] = useState(200)
  const [enoughgold, setEnoughGold] = useState(false);

  const [hp, setHp] = useState(5000);
  const [opponentHp, setOpponentHp] = useState(5000);

  const [startGameActive, setStartGameActive] = useState(false);

  const [tp1SelectCard, settp1SelectCard] = useState(false);

  

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const setAlreadyAtkedCards = () => {
      attackedArray.push(attackingCard[0]);
      setAttacked(attackedArray);
      console.log('this card can no longer atk')
  }
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

  const onAttackCardClick = (e) => {
    let clickedBattleCard = e.target.closest("div");
    let card = battlefield.filter((x) => x.id === clickedBattleCard.id);
    setAttackingCard(card);
    settp1SelectCard(true)
  };

  const EndTurn = () => {
    if (yourturn == false){
      return
    }

    attackedArray = [];
    setAttacked(attackedArray)

    setYourTurn(false);
    setWhichTurn('Opponents Turn')

    oppTurn();
      
    setTimeout(() => {
      setYourTurn(true);
      setWhichTurn('Your Turn!')
      startPlayerTurn()
    }, 6000);
  };

  const oppTurn = () => {
    setOppGold(oppGold + 150)
    
    startOpponentTurn()
    
    setTimeout(() => {
      playCard()
    }, 1000);

    setTimeout(() => {
      aiAttack()
    }, 3000);
  }

  const startOpponentTurn = () => {
  
    if(opponentCardsinhand.length > 3){
      opponentDeck.splice(0, 1)
    } else {
      let currentOppHand = opponentCardsinhand;
      let card = opponentDeck[0]
      currentOppHand.push(card)
      opponentDeck.splice(0, 1)
      setopponentCardsinhand(currentOppHand);
    }
  }

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

    setAttackingCard([])
    setSelectedCard([])
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
      setGold(gold - selectedCard[0].cost)
      spellBattlefieldArr.push(selectedCard[0])
      setSpellBattlefield(spellBattlefieldArr)
      let index = cardsinhand.findIndex((x) => x.id === selectedCard[0].id);
      cardsinhand.splice(index, 1);
    } else {
      checkBattlefieldLength(battlefieldArr, selectedCard[0])
    }

    
    setSelectedCard([])
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
          setTimeout(() => {
            deleteSpellFromArr(spellBattlefieldArr)
          }, 1000);
          
        break;
        
        case "Money Making Idea":
          setTimeout(() => {
            setGold(gold + 100)
          }, 500)
          setTimeout(() => {
            deleteSpellFromArr(spellBattlefieldArr)
          }, 1000);
        break;

        case "TinyMCE":
          HealEveryCard(battlefield)
          setTimeout(() => {
            deleteSpellFromArr(spellBattlefieldArr)
          }, 1000);
        break;

        case "TP1":
          if(battlefield.length === 0){
            return;
          }
          let select = Math.floor(Math.random() * Math.floor(battlefield.length));
          let selectedCard = battlefield[select]
          
          tp1(selectedCard)

          setTimeout(() => {
            deleteSpellFromArr(spellBattlefieldArr)
          }, 1000);
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
    let i = 0;

    for(let i = 0; i < opponentCardsinhand.length;){
      
      if(opponentCardsinhand[i].cost > oppGold) {
        i++
      } else {
        
        let index = opponentCardsinhand.findIndex((x) => x.id === opponentCardsinhand[i].id);

        console.log(opponentCardsinhand[index])
        if(opponentCardsinhand[index].type === "spell"){
          
          spellBattlefieldArr.push(opponentCardsinhand[index])
          setOppGold(oppGold - opponentCardsinhand[index].cost)
    
          switch (opponentCardsinhand[index].name) {
            case "Quire":
              DrawOneCard(opponentDeck, opponentCardsinhand);
              setTimeout(() => {
                deleteSpellFromArr(spellBattlefieldArr)
              }, 1000);
            break;
            case "Money Making Idea":
              setTimeout(() => {
                setOppGold(oppGold + 100)
              }, 500)
              setTimeout(() => {
                deleteSpellFromArr(spellBattlefieldArr)
              }, 1000);
            break;
    
            default:
              break;
          }

          let newArr =  opponentCardsinhand.splice(index, 1)
          setopponentCardsinhand(newArr)
          
    
        } else {
          if(opponentBattleField.length === 3){
            console.log("Too many cards in battlefield");
          } else {
            setOppGold(oppGold - opponentCardsinhand[index].cost)
            opponentBattleArr.push(opponentCardsinhand[index]);
            let newArr = opponentCardsinhand
            newArr.splice(index, 1)
            setopponentCardsinhand(newArr)
            setOppoentBattleField(opponentBattleArr);
           
          }
        }
        i++
      }
      
    }
  };

  const aiAttack = () => {
    if(opponentBattleField.length === 0 || battlefield.length === 0){
      return;
    }

    let cardToAttackWithNumber = Math.floor(Math.random() * Math.floor(opponentBattleField.length));
    let cardToAttackWith = opponentBattleField[cardToAttackWithNumber];
    let cardToAttackNumber;
    let cardToAttack;

    for (let i = 0; i < battlefield.length; i++){
      if(cardToAttackWith.atk > battlefield[i].def + battlefield[i].hp){
        cardToAttack = battlefield[i];
      } else if (cardToAttackWith.atk > battlefield[i].def) {
        cardToAttack = battlefield[i];
      } else {
        cardToAttackNumber = Math.floor(Math.random() * Math.floor(battlefield.length));
        cardToAttack = battlefield[cardToAttackNumber];
      }

    }


    let attack = cardToAttackWith.atk;
    let totalHp = cardToAttack.def + cardToAttack.hp;
    
    if(attack > totalHp){

      //If attacked cards attack is less than cardToAttackWith def, reduce def
      if(cardToAttack.atk < cardToAttackWith.def){
        
        reduceDefCard(cardToAttack, cardToAttackWith)

        //If attacked cards atk is more than cardToAttackWith def, reduce hp
      } else if(cardToAttack.atk > cardToAttackWith.def){
        reduceHpCard(cardToAttack, cardToAttackWith)
      }

      //If card gets destroyed
      if(cardToAttackWith.hp <= 0){
        let cardAttackedAtk = cardToAttack.atk;
        let totalOppCardHp = cardToAttackWith.def + cardToAttackWith.hp;
        let damage = cardAttackedAtk - totalOppCardHp;
        setOpponentHp(opponentHp - damage)
        opponentBattleField.splice(cardToAttackWithNumber, 1)
      }
      
      //Splice/delete our card
      let index = battlefield.findIndex((x) => x.id === cardToAttack.id);
      battlefield.splice(index, 1)
      let damage = attack - totalHp;
      setHp(hp - damage)

    } else if(attack < totalHp){
      if(attack < cardToAttack.def){
        let newCardDef = cardToAttack.def - attack;
        cardToAttack.def = newCardDef;
        if(cardToAttackWith.def > cardToAttack.atk){
          let newCardToAtkWithDef = cardToAttackWith.def - cardToAttack.atk;
          cardToAttackWith.def = newCardToAtkWithDef;
        } else if(cardToAttackWith.def < cardToAttack.atk){
          let remainingAtk = cardToAttack.atk - cardToAttackWith.def;  
          let newCardToAtkWithHp = cardToAttackWith.hp - remainingAtk;
          cardToAttackWith.hp = newCardToAtkWithHp;
          cardToAttackWith.def = 0;
        }
      }

      if(cardToAttackWith.hp <= 0){
        let cardAttackedAtk = cardToAttack.atk;
        let totalOppCardHp = cardToAttackWith.def + cardToAttackWith.hp;
        let damage = cardAttackedAtk - totalOppCardHp;
        setOpponentHp(opponentHp - damage)
        opponentBattleField.splice(cardToAttackWithNumber, 1)
      }
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
        attackingCard={attackingCard}
        setAttackingCard={setAttackingCard}
        onAttackCardClick={onAttackCardClick}
        setAlreadyAtkedCards={setAlreadyAtkedCards}
        attacked={attacked}
        oppGold={oppGold}
      />
    </>
  );
};

export default FunctionsComponent;
