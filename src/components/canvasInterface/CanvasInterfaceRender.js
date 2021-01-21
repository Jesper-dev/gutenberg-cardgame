import React from 'react'
import {
    StartGameButton,
    NotEnoughError,
    EndTurnButton,
} from "../canvas/CanvasElements";


const CanvasInterfaceRender = ({ endTurnFunc, startGame, enoughgold, buttonShow }) => {
    return (
        <>
            <EndTurnButton onClick={endTurnFunc}>End Turn</EndTurnButton>

            <NotEnoughError style={enoughgold ? { display: "block" } : { display: "none" }} >
                Not Enough Gold!
            </NotEnoughError>

            <StartGameButton style={buttonShow ? { display: "flex" } : { display: "none" }} onClick={startGame}>
                START GAME
             </StartGameButton>
        </>
    )
}

export default CanvasInterfaceRender
