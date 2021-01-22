import React from 'react'

export const DrawOneCard = (arr, cardsInHand) => {
    if(cardsInHand > 3){
        return
    }
    let card = arr[0];
    arr.splice(0, 1);
    cardsInHand.push(card);
}

