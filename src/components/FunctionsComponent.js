import React, { useState, useEffect } from "react";
import Canvas from "./canvas/Canvas";
import { CardsArray } from "./cardsarray/CardArray";



const FunctionsComponent = () => {
    let opponentBattleArr = []
    const [buttonShow, setButtonShow] = useState(true);

  const [deck, setDeck] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);
//   const [opponentCards, setOpponentCards] = useState([]);
  const [yourturn, setYourTurn] = useState(true);
  const [opponentBattleField, setOppoentBattleField] = useState([]);
  const [opponentCardsinhand, setopponentCardsinhand] = useState([]);
  const [selected, setSelected] = useState([]);
  

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
  }

  
  useEffect(() => {
    shuffleArray(CardsArray);
    setDeck(CardsArray);
    console.log("In op hand", opponentCardsinhand)
  }, []);

  const EndTurn = () => {
    setYourTurn(false);
    
  
    setSelected(opponentCardsinhand[0]);
    
    
    opponentBattleArr.push(opponentCardsinhand[0])
    setSelected(opponentBattleArr[0])
    console.log("In op battle arr", opponentBattleArr)
    opponentCardsinhand.splice(0, 1);
    setOppoentBattleField(selected)
    // console.log(opponentBattleField)

    // console.log(opponentCardsinhand)
    // let newOpBatArr = []
    // newOpBatArr = opponentCardsinhand.splice(0, 1);
    // console.log("newopBat", newOpBatArr)
    
    // opponentBattleArr.push(newOpBatArr[0]);
    
    // console.log(opponentBattleArr)
    
    // setOppoentBattleField(opponentBattleArr)

    // console.log(opponentBattleArr)
    // let index = opponentCardsinhand.findIndex((x) => x.id === opponentCardsinhand[0].id);

    
    

    setTimeout(() => {
        setYourTurn(true)
    }, 5000);
    


  };

  const startGame = () => {
    let playerArr = [];
    let opponentArr = [];
    playerArr = deck.splice(0, 3);
    opponentArr = opponentDeck.splice(0, 3);
    setCardsInHand(playerArr);
    setopponentCardsinhand(opponentArr);
    setButtonShow(false);
  };

  useEffect(() => {
      makeOpponentDeck(CardsArray)
  }, [])

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
      />
    </>
  );
};

export default FunctionsComponent;
