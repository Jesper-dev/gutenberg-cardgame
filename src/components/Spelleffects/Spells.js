import React from 'react'

export const DrawOneCard = (arr, cardsInHand) => {
    let card = arr[0];
    arr.splice(0, 1);
    cardsInHand.push(card);
}

