import React from "react";
import CharacterCard from "../card/CharacterCard";
import SpellCard from "../card/SpellCard";
import OpponentCardsHandRender from "./OpponentCardsHandRender";
import { OppenentCardHand } from "./OpponentCardsHandElements";

const OpponentCardsHand = ({ opponentCardsinhand }) => {
  return (
    <>
      {opponentCardsinhand.map(function (item, i) {
        return (
          <div key={i}>
            <OppenentCardHand
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
            />
          </div>
        );
      })}
    </>
  );
};

export default OpponentCardsHand;
