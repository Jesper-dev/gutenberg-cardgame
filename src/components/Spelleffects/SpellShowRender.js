import React from 'react'
import styled from 'styled-components'
import SpellShowCard from './SpellShowCard'

const SpellShowRender = ({spellBattlefieldArr}) => {
    return (
        <>
               {spellBattlefieldArr.map(function (item, i) {
                return (
                    <SpellShowCon key={i}>
                        <SpellShowCard
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
                    </SpellShowCon>
                );
            })}
        </>
    )
}

export default SpellShowRender





const SpellShowCon = styled.div`
    position: absolute;
    top: 22%;
    left: 14%;

    :hover {
        border: none;
    }
`
