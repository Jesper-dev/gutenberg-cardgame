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

export const HealEveryCard = (arr) => {
    for(let i = 0; i < arr.length; i++){
        
        let newHp = arr[i].hp + 50;

        if(newHp > 100){
            let remainHp = newHp - 100;
            let newHp2 = newHp - remainHp;
            arr[i].hp = newHp2;
        } else {
            arr[i].hp = newHp;
        }
        
        let newDef = arr[i].def + 100;
        arr[i].def = newDef;
    }
}

export const tp1 = (selectedCard) => {
   
    let newAtk = selectedCard.atk + 100;
    selectedCard.atk = newAtk
    if(selectedCard.name.includes("scrum-master")){
        return;
    } else {
        let newName = selectedCard.name + " scrum-master";
        selectedCard.name = newName;
    }
}

export const harmonica = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].def > 200){
            let newDef = arr[i].def - 200;
            arr[i].def = newDef;
        } else if(arr[i].def <= 200){
            let newHp = arr[i].hp - 200;
            arr[i].hp = newHp;
        } 
        
    }
}

