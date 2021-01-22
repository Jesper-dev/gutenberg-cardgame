import React, {useState} from "react";
import { CanvasWrapper, StartGameButton } from "./CanvasElements";
import CanvasInterfaceRender from "../canvasInterface/CanvasInterfaceRender";
import OpponentTurn from "../opponent/OpponentTurn";
import BattleField from "../battlefield/BattleField";
import OpponentBattleField from "../battlefield/OpponentBattleField";
import OpponentCardsHandRender from "../cardsHand/OpponentCardsHandRender";
import CardsHand from "../cardsHand/CardsHand";
import Player from "../player/Player";
import SpellShowRender from '../Spelleffects/SpellShowRender'
import {
  OpponentCardContainer,
  PlayerFiledContainer,
  PlayerCardsContainer,
  PlayCardButton
} from "../player/PlayerElements";
import { BattlefieldContainer } from "../battlefield/BattleFieldElements";

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
  startGameActive,
  deck,
  oppDeck,
  newOpponentHp,
  newPlayerHp,
  newOpponentBattleField,
  spellBattlefieldArr
  
}) => {

  const [attackingCard, setAttackingCard] = useState([])
  const [defendingCard, setDefendingCard] = useState([])
  const [chosenDef, setChosenDef] = useState();

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
      compareAtkDefplusHp();
      AtkReduceDefAndHp();
      setAttackingCard([]);
      setDefendingCard([]);
    }
  }

  const compareAtkDefplusHp = () => {
    
      if(attackingCard[0].atk > defendingCard[0].def + defendingCard[0].hp){
        reduceOppHp()
        destroyCard(opponentBattleField, defendingCard)
        
      } else {
        DefreduceDefAndHp();
      }
      
  }

  const reduceOppHp = () => {
    let attack = attackingCard[0].atk;
    let def = defendingCard[0].def + defendingCard[0].hp;
    let damage = attack - def;
    newOpponentHp(opponentHp - damage)
  }

  const reducePlayerHp = () => {
    let attack = defendingCard[0].atk;
    let def = attackingCard[0].def;
    let cardHealth = attackingCard[0].hp
    let total = def + cardHealth;
    let damage = attack - total;
    let damageTaken = hp - damage
    newPlayerHp(damageTaken);
  }

  const DefreduceDefAndHp = () => {
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
  
  const AtkReduceDefAndHp = () => {
    
    if(defendingCard[0].atk < attackingCard[0].def){
      AtkCardNewDef = attackingCard[0].def - defendingCard[0].atk;
     return newCardDef
    } else if (defendingCard[0].atk > attackingCard[0].def) {
      let remainAtk = defendingCard[0].atk - attackingCard[0].def;
      AtkCardNewHp = attackingCard[0].hp - remainAtk;
      
    }

    setTimeout(() => {
      attackingCard[0].hp = AtkCardNewHp;
      attackingCard[0].def = 0;
    }, 1000);
    
    
    if(AtkCardNewHp <= 0){
      reducePlayerHp()
      destroyCard(battlefield, attackingCard)
     }
  }

  const destroyCard = (arr, card) => {
    let index = arr.findIndex((x) => x.id === card[0].id);
    arr.splice(index, 1)
    
  }
  

  const onAttackCardClick = (e) => {
    let clickedBattleCard = e.target.closest("div");
    let card = battlefield.filter((x) => x.id === clickedBattleCard.id);
    setAttackingCard(card);
  };



  const onDefendingCardClick = (e) => {
    let clickedDefendingCard = e.target.closest("div");
    let card = opponentBattleField.filter((x) => x.id === clickedDefendingCard.id);
    setDefendingCard(card)
    setChosenDef(card)
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


        <SpellShowRender spellBattlefieldArr={spellBattlefieldArr} />

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
