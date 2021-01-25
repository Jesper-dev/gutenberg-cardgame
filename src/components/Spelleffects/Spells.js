import OpponentCardsHand from "../cardsHand/OpponentCardsHand";


export const DrawOneCard = (arr, cardsInHand) => {
    if(cardsInHand > 3){
        arr.splice(0, 1)
        return
    } else {
        let card = arr[0];
        arr.splice(0, 1);
        cardsInHand.push(card);
    }
    
}

