import React from "react";

import OpponentCardsHand from '../cardsHand/OpponentCardsHand'
import { CardWrapper } from "./OpponentCardsHandElements";


const OpponentCardsHandRender = ({ id, value, opponentCardsinhand }) => {


    return (
        <CardWrapper value={value} id={id} >
            <OpponentCardsHand opponentCardsinhand={opponentCardsinhand} />
        </CardWrapper>
    );
};



export default OpponentCardsHandRender;
