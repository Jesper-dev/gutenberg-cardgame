import OpponentCardsHand from "../cardsHand/OpponentCardsHand";

export const DrawOneCard = (arr, cardsInHand) => {
  if (cardsInHand > 3) {
    arr.splice(0, 1);
    return;
  } else {
    let card = arr[0];
    arr.splice(0, 1);
    cardsInHand.push(card);
  }
};

export const HealEveryCard = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let newHp = arr[i].hp + 50;

    if (newHp > 100) {
      let remainHp = newHp - 100;
      let newHp2 = newHp - remainHp;
      arr[i].hp = newHp2;
    } else {
      arr[i].hp = newHp;
    }

    let newDef = arr[i].def + 100;
    arr[i].def = newDef;
  }
};

export const tp1 = (selectedCard) => {
  let newAtk = selectedCard.atk + 100;
  selectedCard.atk = newAtk;
  if (selectedCard.name.includes("scrum-master")) {
    return;
  } else {
    let newName = selectedCard.name + " scrum-master";
    selectedCard.name = newName;
  }
};

export const harmonica = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].def > 200) {
      let newDef = arr[i].def - 200;
      arr[i].def = newDef;
    } else if (arr[i].def <= 200) {
      let newHp = arr[i].hp - 200;
      arr[i].hp = newHp;
    }
  }
};

export const jonLevelTwo = (battlefield, hand, deck) => {
  //First battlefield
  for (let i = 0; i < battlefield.length; i++) {
    if (battlefield[i].name === "Jon") {
      let newAtk = battlefield[i].atk + 500;
      battlefield[i].atk = newAtk;

      let newDef = battlefield[i].def + 300;
      battlefield[i].def = newDef;
    } else {
      console.log("Nothing");
    }
  }

  //Second hand
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].name === "Jon") {
      let newAtk = hand[i].atk + 500;
      hand[i].atk = newAtk;

      let newDef = hand[i].def + 300;
      hand[i].def = newDef;
    } else {
      console.log("Nothing");
    }
  }

  //Third deck
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].name === "Jon") {
      let newAtk = deck[i].atk + 500;
      deck[i].atk = newAtk;

      let newDef = deck[i].def + 300;
      deck[i].def = newDef;
    } else {
      console.log("Nothing");
    }
  }
};

export const coffee = (battlefield, hand) => {
  //First battlefield
  for (let i = 0; i < battlefield.length; i++) {
    if (battlefield[i].type === "Programmer") {
      let newAtk = battlefield[i].atk + 250;
      battlefield[i].atk = newAtk;

      let newDef = battlefield[i].def + 150;
      battlefield[i].def = newDef;
    } else {
      console.log("Nothing");
    }
  }

  //Second hand
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].type === "Programmer") {
      let newAtk = hand[i].atk + 250;
      hand[i].atk = newAtk;

      let newDef = hand[i].def + 150;
      hand[i].def = newDef;
    } else {
      console.log("Nothing");
    }
  }
};

export const mariachiOnPlay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].def > 150) {
      let newDef = arr[i].def - 150;
      arr[i].def = newDef;
    } else if (arr[i].def <= 150) {
      let newHp = arr[i].hp - 150;
      arr[i].hp = newHp;
    }
  }
};
