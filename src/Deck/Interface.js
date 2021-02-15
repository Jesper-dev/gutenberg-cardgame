import React, { useState } from "react";
import { Wrapper, InnerWrapper } from "./InterfaceElements";
import { DeckCardsArray } from "./DeckBuildArray";
import DeckBuildCharacter from "./deckCharacter/DeckBuildCharacter";
import { remove } from "lodash";
import { CardsArray } from "../components/cardsarray/CardArray";

export let selfCreatedDeck = [];
let i = 0;
export const Interface = () => {
  const [number, setNumber] = useState(2);

  const addCard = (e) => {
    i++;
    let card = e.target.closest("div");
    console.log(card);
    let index = DeckCardsArray.findIndex((x) => x.id == card.id);
    let newId = i;

    selfCreatedDeck.unshift(DeckCardsArray[index]);

    selfCreatedDeck[0].id = newId;
    console.log(selfCreatedDeck);
  };

  const removeCard = () => {
    console.log("Card removed lol");
  };

  return (
    <Wrapper>
      <InnerWrapper>
        {DeckCardsArray.map((item, i) => {
          return (
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
                number={number}
                addCard={addCard}
                removeCard={removeCard}
              />
            </>
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
};
