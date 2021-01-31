import React, { useState } from 'react'
import CharacterCard from "../card/CharacterCard";
import SpellCard from "../card/SpellCard";

const CardsHand = ({ cardsinhand, CheckType, onCardClick, selCardHand, setSelCardHand, yourturn }) => {

    const highlightCard = (item) => {
        if (!yourturn) {
            return
        }
        if (item == selCardHand) {
            setSelCardHand()
        } else {
            setSelCardHand(item)
        }
    }

    return (
        <>
            {cardsinhand.map(function (item, i) {
                return CheckType(item) ? (
                    <div key={i} onClick={onCardClick}>
                        <CharacterCard
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
                            cardsinhand={cardsinhand}
                            active={item === selCardHand}
                            onClick={() => highlightCard(item)}
                        />
                    </div>
                ) : (
                        <div key={i} onClick={onCardClick}>
                            <SpellCard
                                id={item.id}
                                key={i}
                                name={item.name}
                                img={item.img}
                                type={item.type}
                                descText={item.descText}
                                cost={item.cost}
                                active={item === selCardHand}
                                onClick={() => highlightCard(item)}
                            />
                        </div>
                    );
            })}
        </>
    )
}

export default CardsHand