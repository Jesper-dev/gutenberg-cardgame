import React from 'react'
import CharacterCard from "../card/CharacterCard";
import SpellCard from "../card/SpellCard";

const CardsHand = ({ cardsinhand, CheckType, onCardClick }) => {
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
                            />
                        </div>
                    );
            })}
        </>
    )
}

export default CardsHand