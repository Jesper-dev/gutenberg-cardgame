import React, {useState} from "react";
import { CanvasWrapper, StartGameButton } from "./CanvasElements";
import CanvasInterfaceRender from "../canvasInterface/CanvasInterfaceRender";
import OpponentTurn from "../opponent/OpponentTurn";
import BattleField from "../battlefield/BattleField";
import OpponentBattleField from "../battlefield/OpponentBattleField";
import OpponentCardsHandRender from "../cardsHand/OpponentCardsHandRender";
import CardsHand from "../cardsHand/CardsHand";
import Player from "../player/Player";
import {
  OpponentCardContainer,
  PlayerFiledContainer,
  PlayerCardsContainer,
  PlayCardButton
} from "../player/PlayerElements";
import { BattlefieldContainer } from "../battlefield/BattleFieldElements";

let newCardHp = 0;
let newCardDef = 0;
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
  startGameActive,
  deck,
  oppDeck,
  newOpponentHp,
  newOpponentBattleField,
  
}) => {

  const [attackingCard, setAttackingCard] = useState([])
  const [defendingCard, setDefendingCard] = useState([])

  const CheckType = (item) => {
    if (item.type === "spell") {
      return false;
    } else {
      return true;
    }
  };

  const attackingFunc = () => {
    if(attackingCard.length == 0 || defendingCard.length == 0){
      return;
    } else {
      compareAtkDefplusHp()
    }
  }

  const compareAtkDefplusHp = () => {
    
      if(attackingCard[0].atk > defendingCard[0].def + defendingCard[0].hp){
        reduceOppHp()
        destroyOppCard(opponentBattleField)
      } else {
        reduceDefAndHp();
      }
  }

  const reduceOppHp = () => {
    let attack = attackingCard[0].atk;
    let def = defendingCard[0].def + defendingCard[0].hp;
    let damage = attack - def;
    newOpponentHp(opponentHp - damage)
  }

  const reduceDefAndHp = () => {
    if(attackingCard[0].atk < defendingCard[0].def){
     newCardDef = defendingCard[0].def - attackingCard[0].atk;
     return newCardDef
    } else if (attackingCard[0].atk > defendingCard[0].def) {
      let remainAtk = attackingCard[0].atk - defendingCard[0].def;
      newCardHp = defendingCard[0].hp - remainAtk;
    
    }
     
     defendingCard[0].hp = newCardHp;
     defendingCard[0].def = 0;
  }

  const destroyOppCard = (arr) => {
    let index = arr.findIndex((x) => x.id === defendingCard[0].id);
    arr.splice(index, 1)
    console.log(arr)
    
  }
  
  const onAttackCardClick = (e) => {
    let clickedBattleCard = e.target.closest("div");
    let card = battlefield.filter((x) => x.id === clickedBattleCard.id);
    setAttackingCard(card);
    console.log("Attack card is: ", attackingCard)
  };

  const onDefendingCardClick = (e) => {
    let clickedDefendingCard = e.target.closest("div");
    let card = opponentBattleField.filter((x) => x.id === clickedDefendingCard.id);
    setDefendingCard(card)
    console.log("Def card is: ", defendingCard)
  }

  return (
    <CanvasWrapper>
      <OpponentTurn />
      <StartGameButton style={buttonShow ? { display: "flex" } : { display: "none" }} onClick={startGame}>
                START GAME
      </StartGameButton>
            
     
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
       />
      ) : (
        <></>
      )}

      <OpponentCardContainer>
        <OpponentCardsHandRender opponentCardsinhand={opponentCardsinhand} />
      </OpponentCardContainer>

      <OpponentBattleField onDefendingCardClick={onDefendingCardClick} opponentBattlefield={opponentBattleField} />

      <BattlefieldContainer>
        <BattleField onAttackCardClick={onAttackCardClick} Battlefield={battlefield} />
      </BattlefieldContainer>

      <Player onPlayCard={onPlayCard} hp={hp} />

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
