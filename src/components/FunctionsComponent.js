import React, { useState, useEffect } from "react";
import BattleField from "./battlefield/BattleField";
import OpponentBattleField from "./battlefield/OpponentBattleField";
import Canvas from "./canvas/Canvas";
import { CardsArray } from "./cardsarray/CardArray";
import { OpponentCardArray } from "./cardsarray/OpponentCardArray";
import {
  DrawOneCard,
  DrawThreeCards,
  harmonica,
  HealEveryCard,
  tp1,
  jonLevelTwo,
  mariachiOnPlay,
  coffee,
  error,
  jesperOnPlay,
  goldenInstrument,
} from "./Spelleffects/Spells";
import {
  startOpponentTurn,
  reduceHpCard,
  reduceDefCard,
} from "./opponent/OpponentTurn";

let opponentBattleArr = [];
let battlefieldArr = [];
let spellBattlefieldArr = [];
let attackedArray = [];
let attackedArrayBot = [];
let oppGold = 300;

const FunctionsComponent = () => {
  const [buttonShow, setButtonShow] = useState(true);

  const [deck, setDeck] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);
  //   const [opponentCards, setOpponentCards] = useState([]);
  const [yourturn, setYourTurn] = useState(true);
  const [chosenAtk, setChosenAtk] = useState();
  const [chosenDefHigh, setChosenDefHigh] = useState();
  const [selCardHand, setSelCardHand] = useState();

  const [cardsinhand, setCardsInHand] = useState([]);
  const [opponentCardsinhand, setopponentCardsinhand] = useState([]);

  const [whichTurn, setWhichTurn] = useState("Your Turn!");

  const [battlefield, setBattlefield] = useState([]);
  const [opponentBattleField, setOppoentBattleField] = useState([]);
  const [spellBattlefield, setSpellBattlefield] = useState([]);

  const [selectedCard, setSelectedCard] = useState([]);
  const [attackingCard, setAttackingCard] = useState([]);
  const [defendingCard, setDefendingCard] = useState([]);
  const [attacked, setAttacked] = useState([]);

  const [gold, setGold] = useState(1000);
  const [enoughgold, setEnoughGold] = useState(false);

  const [hp, setHp] = useState(10000);
  const [opponentHp, setOpponentHp] = useState(10000);

  const [startGameActive, setStartGameActive] = useState(false);

  const [silencePlayer, setSilencePlayer] = useState(false);
  const [silenceBot, setSilenceBot] = useState(false);

  const [environment, setEnvironment] = useState("");

  const [harmonicaPlayer, setHarmonicaPlayer] = useState(false);
  const [harmonicaBot, setHarmonicaBot] = useState(false);

  const [round, setRound] = useState(0)

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const setAlreadyAtkedCards = () => {
    attackedArray.push(attackingCard[0]);
    setAttacked(attackedArray);
  };
  const newOpponentHp = (newHp) => setOpponentHp(newHp);
  const newPlayerHp = (newHp) => setHp(newHp);

  const newOpponentBattleField = (arr) => setOppoentBattleField(arr);

  const makeOpponentDeck = (array) => {
    shuffleArray(array);
    setOpponentDeck(array);
  };

  useEffect(() => {
    shuffleArray(CardsArray);
    setDeck(CardsArray);
  }, []);

  const onAttackCardClick = (e) => {
    if (yourturn == false) {
      return;
    }
    let clickedBattleCard = e.target.closest("div");
    let card = battlefield.filter((x) => x.id === clickedBattleCard.id);

    if (attackingCard.length === 0) {
      setAttackingCard(card);
    } else if (attackingCard[0].id === card[0].id) {
      setAttackingCard([]);
    } else {
      setAttackingCard(card);
    }
  };

  const EndTurn = () => {
    if (yourturn == false) {
      return;
    }

    attackedArray = [];
    setAttacked(attackedArray);

    setSelCardHand();
    setChosenAtk();
    setChosenDefHigh();
    setAttackingCard([]);
    setDefendingCard([]);
    setYourTurn(false);
    setWhichTurn("Opponents Turn");

    setSilenceBot(false);
    botDrawCard();

    playCard();

    setTimeout(() => {
      aiAttack();
    }, 6000);

    setTimeout(() => {
      setYourTurn(true);
      setWhichTurn("Your Turn!");
      
      startPlayerTurn();
    }, 10000);
  };

  const botDrawCard = () => {
    if (opponentCardsinhand.length > 4) {
      opponentDeck.splice(0, 1);
    } else {
      // let currentOppHand = opponentCardsinhand;
      let card = opponentDeck[0];
      let newHand = opponentCardsinhand;
      newHand.push(card);
      opponentDeck.splice(0, 1);
      setopponentCardsinhand(newHand);
    }
  };

  //On start of player turn
  const startPlayerTurn = () => {
    setGold(gold + 150);
    setRound(round + 1)
    console.log(round)

    let newOppGold = oppGold + 150;
    oppGold = newOppGold;
    setSilencePlayer(false);
    attackedArrayBot = [];

    if (cardsinhand.length > 4) {
      deck.splice(0, 1);
    } else {
      let currentHand = cardsinhand;
      let card = deck[0];
      deck.splice(0, 1);
      currentHand.push(card);
      setCardsInHand(currentHand);
    }

    setAttackingCard([]);
    setSelectedCard([]);
  };

  const goldErrorReset = () => setEnoughGold(false);

  const checkBattlefieldLength = (arr, card) => {
    if (arr.length === 4) {
      return;
    } else {
      arr.push(card);
      setGold(gold - card.cost);
      setBattlefield(arr);

      let index = cardsinhand.findIndex((x) => x.id === selectedCard[0].id);
      cardsinhand.splice(index, 1);
    }
  };

  //När en spelare spelar ett kort
  const onPlayCard = () => {
    if (yourturn == false || selectedCard.length === 0) {
      return;
    }
    if (selectedCard[0].cost > gold) {
      setEnoughGold(true);
      setTimeout(goldErrorReset, 3000);
      return;
    } else if (selectedCard[0].cost <= gold) {
      checkCardType();

      if (selectedCard[0].type === "spell") {
        setGold(gold - selectedCard[0].cost);
        spellBattlefieldArr.push(selectedCard[0]);
        setSpellBattlefield(spellBattlefieldArr);
        let index = cardsinhand.findIndex((x) => x.id === selectedCard[0].id);
        cardsinhand.splice(index, 1);
      } else {
        checkBattlefieldLength(battlefieldArr, selectedCard[0]);
      }

      setSelectedCard([]);
    }
  };

  const deleteSpellFromArr = () => {
    setTimeout(() => {
      spellBattlefieldArr.splice(0);
      setSpellBattlefield(spellBattlefield);
    }, 2000);
  };

  //För spelaren
  const checkCardType = () => {
    if (selectedCard[0].type === "spell") {
      switch (selectedCard[0].name) {
        case "Quire":
          DrawOneCard(deck, cardsinhand);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Money Making Idea":
          setTimeout(() => {
            setGold(gold + 100);
          }, 500);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "TinyMCE":
          HealEveryCard(battlefield);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "TP1":
          if (battlefield.length === 0) {
            return;
          }

          let select = Math.floor(
            Math.random() * Math.floor(battlefield.length)
          );
          let selectedCard = battlefield[select];

          tp1(selectedCard);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Harmonica":
          setSilencePlayer(true);

          harmonica(opponentBattleField);
          setHarmonicaPlayer(true);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Tiny MC Daddy":
          setSilencePlayer(true);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Espresso House":
          setEnvironment("Espresso House");

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Jon Level Two":
          jonLevelTwo(battlefield, cardsinhand, deck);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Malware":
          let newOppHp = opponentHp - 100;
          setOpponentHp(newOppHp);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Coffee":
          coffee(battlefield, cardsinhand);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Error":
          error(opponentBattleField);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Golden Instrument":
          goldenInstrument(battlefield);

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        case "Quire 2.0":
          DrawThreeCards(deck, cardsinhand)

          deleteSpellFromArr(spellBattlefieldArr);

          break;

        default:
          break;
      }
    } else {
      switch (selectedCard[0].name) {
        case "Onur":
          if (environment === "Espresso House") {
            let newAtk = selectedCard[0].atk + 500;
            let newDef = selectedCard[0].def + 500;
            selectedCard[0].atk = newAtk;
            selectedCard[0].def = newDef;
          } else {
            return;
          }

          break;

        case "Gutenberg Mariachi":
          mariachiOnPlay(opponentBattleField);

          break;

        case "Anton":
          if (harmonicaPlayer === true) {
            let newAtk = selectedCard[0].atk + 650;
            selectedCard[0].atk = newAtk;
          } else {
            return;
          }

          break;

        case "Jesper":
          jesperOnPlay(battlefield, selectedCard[0]);

          break;

        default:
          break;
      }
    }
  };

  const onCardClick = (e) => {
    let clicked = e.target.closest("div");
    let card = cardsinhand.filter((x) => x.id === clicked.id);

    if (yourturn == false || card[0] === undefined) {
      return;
    }

    if (selectedCard.length === 0) {
      setSelectedCard(card);
    } else if (selectedCard[0].id === card[0].id) {
      setSelectedCard([]);
    } else {
      setSelectedCard(card);
    }
  };

  //När en motståndare/bot spelar ett kort
  const playCard = () => {
    for (let i = 0; i < opponentCardsinhand.length; i++) {
      //Card to be played
      let card = opponentCardsinhand[i];

      if (
        card.cost < oppGold &&
        card.typeTwo === "character" &&
        opponentBattleField.length < 4
      ) {
        checkBotChar(i);

        let newOppGold = oppGold - card.cost;
        oppGold = newOppGold;

        opponentBattleField.push(card);
        setOppoentBattleField(opponentBattleField);

        opponentCardsinhand.splice(i, 1);
      } else if (card.cost < oppGold && card.type === "self-spell") {
        let newOppGold = oppGold - card.cost;
        oppGold = newOppGold;
        checkBotSpell(i);

        spellBattlefieldArr.push(card);
        setSpellBattlefield(spellBattlefieldArr);

        opponentCardsinhand.splice(i, 1);
      } else if (
        card.cost < oppGold &&
        opponentBattleField.length > 0 &&
        card.type === "synergi-spell"
      ) {
        let newOppGold = oppGold - card.cost;
        oppGold = newOppGold;
        checkBotSpell(i);
        spellBattlefieldArr.push(card);
        setSpellBattlefield(spellBattlefieldArr);

        opponentCardsinhand.splice(i, 1);
      } else if (
        card.cost < oppGold &&
        battlefield.length > 0 &&
        card.type === "damage-spell"
      ) {
        let newOppGold = oppGold - card.cost;
        oppGold = newOppGold;
        checkBotSpell(i);

        spellBattlefieldArr.push(card);
        setSpellBattlefield(spellBattlefieldArr);

        opponentCardsinhand.splice(i, 1);
      } else {
        console.log("I cant do anything");
      }
    }
  };

  const checkBotChar = (i) => {
    switch (opponentCardsinhand[i].name) {
      case "Onur":
        if (environment === "Espresso House") {
          let newAtk = opponentCardsinhand[i].atk + 500;
          let newDef = opponentCardsinhand[i].def + 500;
          opponentCardsinhand[i].atk = newAtk;
          opponentCardsinhand[i].def = newDef;
        } else {
          return;
        }
        break;

      default:
        break;

      case "Gutenberg Mariachi":
        mariachiOnPlay(battlefield);

        break;

      case "Anton":
        if (harmonicaBot === true) {
          let newAtk = opponentCardsinhand[i].atk + 650;
          opponentCardsinhand[i].atk = newAtk;
        } else {
          return;
        }

      case "Jesper":
        jesperOnPlay(opponentBattleField, opponentCardsinhand[i]);

        break;
    }
  };

  const checkBotSpell = (index) => {
    switch (opponentCardsinhand[index].name) {
      case "Quire":
        DrawOneCard(opponentDeck, opponentCardsinhand);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "TinyMCE":
        HealEveryCard(opponentBattleField);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Money Making Idea":
        setTimeout(() => {
          let newOppGold = oppGold + 100;
          oppGold = newOppGold;
        }, 500);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "TP1":
        let select = Math.floor(
          Math.random() * Math.floor(opponentBattleField.length)
        );
        let selectedCard = opponentBattleField[select];

        tp1(selectedCard);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Harmonica":
        harmonica(battlefield);

        setSilenceBot(true);
        setHarmonicaBot(true);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Tiny MC Daddy":
        setSilenceBot(true);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Espresso House":
        setEnvironment("Espresso House");

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Jon Level Two":
        jonLevelTwo(opponentBattleField, opponentCardsinhand, opponentDeck);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Malware":
        let newPlayerHp = hp - 100;
        setHp(newPlayerHp);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Coffee":
        coffee(opponentBattleField, opponentCardsinhand);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Error":
        error(battlefield);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Golden Instrument":
        goldenInstrument(opponentBattleField);

        deleteSpellFromArr(spellBattlefieldArr);

        break;

      case "Quire 2.0":
          DrawThreeCards(opponentDeck, opponentCardsinhand)

          deleteSpellFromArr(spellBattlefieldArr);

          break;

      default:
        break;
    }
  };

  const aiAttack = () => {
    //Checks states to see which type of attack bot will execute
    if (silencePlayer === true) {
      console.log("You are silenced");
      return;
    } else if (opponentBattleField.length === 0) {
      return;
    } else if (battlefield.length === 0) {
      let playerDmg = 0;
      for (let i = 0; i < opponentBattleField.length; i++) {
        playerDmg += opponentBattleField[i].atk;
      }

      setHp(hp - playerDmg);
      return;
    }

    // This section of code will only execute if both sides have cards in batttle array and if the bot isn't silenced
    for (let i = 0; i < opponentBattleField.length; i++) {
      if(battlefield.length === 0){
        return;
      }

      let cardToAttackWithNumber = Math.floor(
        Math.random() * Math.floor(opponentBattleField.length)
      );

      let cardToAttackWith = opponentBattleField[cardToAttackWithNumber];
      let cardToAttackNumber;
      let cardToAttack;

      if(attackedArrayBot.includes(cardToAttackWith)){
        cardToAttackWithNumber = Math.floor(
          Math.random() * Math.floor(opponentBattleField.length)
        );
      }

      attackedArrayBot.push(cardToAttackWith)

      for (let i = 0; i < battlefield.length; i++) {
        if (cardToAttackWith.atk > battlefield[i].def + battlefield[i].hp) {
          cardToAttack = battlefield[i];
        } else if (cardToAttackWith.atk > battlefield[i].def) {
          cardToAttack = battlefield[i];
        } else {
          cardToAttackNumber = Math.floor(
            Math.random() * Math.floor(battlefield.length)
          );
          cardToAttack = battlefield[cardToAttackNumber];
        }
      }

      let attack = cardToAttackWith.atk;
      let totalHp = cardToAttack.def + cardToAttack.hp;

      if (attack > totalHp) {
        //If attacked cards attack is less than cardToAttackWith def, reduce def
        if (cardToAttack.atk < cardToAttackWith.def) {
          reduceDefCard(cardToAttack, cardToAttackWith);
          //If attacked cards atk is more than cardToAttackWith def, reduce hp
        } else if (cardToAttack.atk > cardToAttackWith.def) {
          reduceHpCard(cardToAttack, cardToAttackWith);
        }

        //If card gets destroyed
        if (cardToAttackWith.hp <= 0) {
          let cardAttackedAtk = cardToAttack.atk;
          let totalOppCardHp = cardToAttackWith.def + cardToAttackWith.hp;
          let damage = cardAttackedAtk - totalOppCardHp;
          setOpponentHp(opponentHp - damage);
          opponentBattleField.splice(cardToAttackWithNumber, 1);
        }

        //Splice/delete our card
        let index = battlefield.findIndex((x) => x.id === cardToAttack.id);
        battlefield.splice(index, 1);
        let damage = attack - totalHp;
        setHp(hp - damage);
      } else if (attack < totalHp) {
        if (attack < cardToAttack.def) {
          let newCardDef = cardToAttack.def - attack;
          cardToAttack.def = newCardDef;
          if (cardToAttackWith.def > cardToAttack.atk) {
            let newCardToAtkWithDef = cardToAttackWith.def - cardToAttack.atk;
            cardToAttackWith.def = newCardToAtkWithDef;
          } else if (cardToAttackWith.def < cardToAttack.atk) {
            let remainingAtk = cardToAttack.atk - cardToAttackWith.def;
            let newCardToAtkWithHp = cardToAttackWith.hp - remainingAtk;
            cardToAttackWith.hp = newCardToAtkWithHp;
            cardToAttackWith.def = 0;
          }
        }

        if (cardToAttackWith.hp <= 0) {
          let cardAttackedAtk = cardToAttack.atk;
          let totalOppCardHp = cardToAttackWith.def + cardToAttackWith.hp;
          let damage = cardAttackedAtk - totalOppCardHp;
          setOpponentHp(opponentHp - damage);
          opponentBattleField.splice(cardToAttackWithNumber, 1);
        }
      }
    }
  };

  //När man startar gamet
  const startGame = () => {
    let playerArr = [];
    let opponentArr = [];
    playerArr = deck.splice(0, 5);
    opponentArr = opponentDeck.splice(0, 4);
    setCardsInHand(playerArr);
    setopponentCardsinhand(opponentArr);
    setButtonShow(false);
    setStartGameActive(true);
    setRound(round + 1)
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
        silenceBot={silenceBot}
        chosenAtk={chosenAtk}
        setChosenAtk={setChosenAtk}
        chosenDefHigh={chosenDefHigh}
        setChosenDefHigh={setChosenDefHigh}
        setSelCardHand={setSelCardHand}
        selCardHand={selCardHand}
        setDefendingCard={setDefendingCard}
        defendingCard={defendingCard}
        round={round}
      />
    </>
  );
};

export default FunctionsComponent;
