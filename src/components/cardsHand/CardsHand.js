import React,{ useState } from 'react'
import CharacterCard from "../card/CharacterCard";
import SpellCard from "../card/SpellCard";

const CardsHand = ({ cardsinhand, CheckType, onCardClick }) => {
    const [chosen, setChosen] = useState();

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
                            active={item === chosen}
                            onClick={() => setChosen(item)}
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