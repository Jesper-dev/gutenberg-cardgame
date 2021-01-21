import React from 'react'
import { PlayCardButton, GoldStatus, LeftToolBarContainer } from "./PlayerElements";


const LeftToolBar = ({ onPlayCard, gold }) => {
    return (
        <>
            <LeftToolBarContainer>

                <GoldStatus>
                    {gold}{" "}
                    <i
                        class="fas fa-coins"
                        style={{ fontSize: "2rem", marginLeft: "6px" }}
                    ></i>
                </GoldStatus>

                <PlayCardButton onClick={onPlayCard}>
                    Play Selected Card!
                 </PlayCardButton>

            </LeftToolBarContainer>
        </>
    )
}

export default LeftToolBar
