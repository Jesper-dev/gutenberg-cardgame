import React from 'react'
import {
    StartGameButton,
    NotEnoughError,
    EndTurnButton, 
    TurnInicator
} from "../canvas/CanvasElements";
import LeftToolBar from "../player/LeftToolBar";
import {RightToolBarContainer, Hpcontainer, PlayCardButton, GoldStatus, LeftToolBarContainer} from "../player/PlayerElements";
/* import { PlayCardButton, GoldStatus, LeftToolBarContainer } from "./Player/PlayerElements"; */
import { OpponentDeckWrapper, PlayerDeckWrapper, VisualDeck, OpponentCardsLeft, PlayerCardsLeft } from './CanvasInterfaceElements'


const CanvasInterfaceRender = ({ endTurnFunc, startGame, enoughgold, buttonShow, whichTurn, gold, onPlayCard, hp, deck, oppDeck }) => {
    return (
        <>
           <OpponentDeckWrapper>
                <VisualDeck><OpponentCardsLeft style={{color: "gold"}}>{oppDeck.length}</OpponentCardsLeft></VisualDeck>
            </OpponentDeckWrapper>
           <PlayerDeckWrapper>
                <VisualDeck><PlayerCardsLeft style={{color: "gold"}}>{deck.length}</PlayerCardsLeft></VisualDeck>
            </PlayerDeckWrapper>


            
            <LeftToolBarContainer>

            <GoldStatus>
            {gold}{" "}
            <i
            class="fas fa-coins"
            style={{ fontSize: "2rem", marginLeft: "6px" }}
                ></i>
            </GoldStatus>

            </LeftToolBarContainer>

            <EndTurnButton onClick={endTurnFunc}>End Turn</EndTurnButton>

            <NotEnoughError style={enoughgold ? { display: "block" } : { display: "none" }} >
                Not Enough Gold!
            </NotEnoughError>

         
            <RightToolBarContainer>
                <Hpcontainer>{hp}</Hpcontainer>
            </RightToolBarContainer>

             <TurnInicator>{whichTurn}</TurnInicator>
        </>
    )
}

export default CanvasInterfaceRender
