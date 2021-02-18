import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {
  Wrapper,
  InnerWrapper,
  DIV,
  DeckShowWrapper,
  DeckBuildHeader,
  DeckBuildWrapper,
  DeckBuildText,
  DeckLength,
  StyledLinked
} from "./InterfaceElements"
import { DeckCardsArray } from "./DeckBuildArray";
import DeckBuildCharacter from "./deckCharacter/DeckBuildCharacter";
import DeckBuildSpell from "./deckCharacter/DeckBuildSpell";
import { CardsArray } from "../components/cardsarray/CardArray";
import DeckBuildSpellCard from "./deckCharacter/DeckBuildSpell";
import { add } from "lodash";

export let selfCreatedDeck = [];

let textToLog = [];

let i = 0;

export const Interface = () => {
  const [cardDeck, setCardDeck] = useState(DeckCardsArray);
  const [deckLength, setDeckLength] = useState(0);

  useEffect(() => {
    setDeckLength(selfCreatedDeck.length)
  }, [])

  const CheckType = (item) => {
    if (item.type === "spell") {
      return false;
    } else {
      return true;
    }
  };

  const addCard = (e) => {
    if (deckLength === 30) {
      return;
    }
    i += 1;

    let card = e.target.closest("div");
    let index = DeckCardsArray.findIndex((x) => x.id == card.id);
    if (DeckCardsArray[index].amount > 1) {
      return;
    }

    DeckCardsArray[index].amount += 1;

    let cardToAdd = DeckCardsArray[index];
    setCardDeck([...cardDeck]);

    let cardObjc = {
      name: cardToAdd.name,
      img: cardToAdd.img,
      type: cardToAdd.type,
      typeTwo: cardToAdd.typeTwo,
      cost: cardToAdd.cost,
      atk: cardToAdd.atk,
      def: cardToAdd.def,
      hp: cardToAdd.hp,
      id: `${cardToAdd.name + i}`,
      idNum: i,
      descText: cardToAdd.descText,
      amount: cardToAdd.amount,
      value: cardToAdd.value,
    };

    if (textToLog.length === 0) {
      textToLog.unshift({ name: cardToAdd.name, id: cardToAdd.id, amount: 1 });
    } else {
      if (textToLog[0].name == cardToAdd.name) {
        textToLog[0].amount += 1;
      } else {
        textToLog.unshift({
          name: cardToAdd.name,
          id: cardToAdd.id,
          amount: 1,
        });
      }
    }

    setDeckLength(deckLength + 1);
    selfCreatedDeck.unshift(cardObjc);
  };

  const removeCard = (e) => {
    let card = e.target.closest("div");

    let index = selfCreatedDeck.findIndex((x) => x.id === card.id);
    let indexTwo = DeckCardsArray.findIndex((x) => x.id === card.id);

    let cardIndex = cardDeck.findIndex((x) => x.id === card.id);
    let clickedCard = cardDeck[cardIndex];

    let indexThree = textToLog.findIndex((x) => x.id === card.id);
    let textToLogCard = textToLog[indexThree];

    //Kolla om selfCreatedDeck innehåller tryckt kort
    if (selfCreatedDeck.length === 0 || clickedCard.amount === 0) {
      return;
    }

    if (textToLogCard.amount == 2) {
      textToLogCard.amount = 1;
      DeckCardsArray[indexTwo].amount -= 1;
      setCardDeck([...DeckCardsArray]);
      selfCreatedDeck.splice(index, 1);
      setDeckLength(deckLength - 1);
      return;
    }

    DeckCardsArray[indexTwo].amount -= 1;
    setCardDeck([...DeckCardsArray]);

    selfCreatedDeck.splice(index, 1);

    setDeckLength(deckLength - 1);
    textToLog.splice(indexThree, 1);
  };

  return (
    <>
      <Wrapper>
      
        <InnerWrapper>
          {cardDeck.map((item, i) => {
            return CheckType(item) ? (
              <>
                <DeckBuildCharacter
                  key={i}
                  id={item.id}
                  value={i}
                  name={item.name}
                  img={item.img}
                  type={item.type}
                  atk={item.atk}
                  def={item.def}
                  descText={item.descText}
                  hp={item.hp}
                  cost={item.cost}
                  amount={item.amount}
                  addCard={addCard}
                  removeCard={removeCard}
                  selfCreatedDeck={selfCreatedDeck}
                  cardDeck={cardDeck}
                  i={i}
                />
              </>
            ) : (
              <>
                <DeckBuildSpellCard
                  key={i}
                  name={item.name}
                  img={item.img}
                  type={item.type}
                  id={item.id}
                  hp={item.hp}
                  cost={item.cost}
                  amount={item.amount}
                  descText={item.descText}
                  removeCard={removeCard}
                  addCard={addCard}
                  amount={item.amount}
                  selfCreatedDeck={selfCreatedDeck}
                  cardDeck={cardDeck}
                  i={i}
                />
              </>
            );
          })}
        </InnerWrapper>
        <DeckShowWrapper>
          <DeckBuildWrapper>
            <DeckBuildHeader>Deck Builder</DeckBuildHeader>
            <StyledLinked exact to="/">Start Game!</StyledLinked>
            <DeckLength>Deck length: {deckLength}/30</DeckLength>
            <DeckBuildText>
              {textToLog.map((item) => {
                return <p>{item.name + " " + item.amount}</p>;
              })}
            </DeckBuildText>

          </DeckBuildWrapper>
        </DeckShowWrapper>
      </Wrapper>
      <Wrapper></Wrapper>
    </>
  );
};
