import OpponentCardsHand from "../cardsHand/OpponentCardsHand";

export const DrawOneCard = (arr, cardsInHand) => {
  if (cardsInHand > 4) {
    arr.splice(0, 1);
    return;
  } else {
    let card = arr[0];
    arr.splice(0, 1);
    cardsInHand.push(card);
  }
};

export const DrawThreeCards = (arr, cardsInHand) => {
  if (cardsInHand > 4) {
    arr.splice(0, 3);
    return;
  } else {
    for (let i = 0; i < 3; i++) {
      if (cardsInHand.length > 5) {
        return;
      } else {
        let card = arr[0];
        cardsInHand.push(card);
        arr.splice(0, 1);
      }
    }
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
  let newAtk = selectedCard.atk + 200;
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
    if (
      battlefield[i].name === "Jon" ||
      battlefield[i].name === "Jon scrum-master"
    ) {
      let newAtk = battlefield[i].atk + 500;
      battlefield[i].atk = newAtk;

      let newDef = battlefield[i].def + 300;
      battlefield[i].def = newDef;

      let newName = battlefield[i].name + " Level Two";
      battlefield[i].name = newName;
    } else {
      console.log("Nothing");
    }
  }

  //Second hand
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].name === "Jon" || hand[i].name === "Jon scrum-master") {
      let newAtk = hand[i].atk + 500;
      hand[i].atk = newAtk;

      let newDef = hand[i].def + 300;
      hand[i].def = newDef;

      let newName = hand[i].name + " Level Two";
      hand[i].name = newName;
    } else {
      console.log("Nothing");
    }
  }

  //Third deck
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].name === "Jon" || deck[i].name === "Jon scrum-master") {
      let newAtk = deck[i].atk + 500;
      deck[i].atk = newAtk;

      let newDef = deck[i].def + 300;
      deck[i].def = newDef;

      let newName = deck[i].name + " Level Two";
      deck[i].name = newName;
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

export const error = (arr) => {
  let select = Math.floor(Math.random() * Math.floor(arr.length));

  if (arr[select].def > 600) {
    let newDef = arr[select].def - 600;
    arr[select].def = newDef;
  } else if ((arr[select].def = 600)) {
    arr[select].def = 0;
  } else if (arr[select].def < 600) {
    let remainDmg = 600 - arr[select].def;
    let newCardHp = arr[select].hp - remainDmg;
    arr[select].hp = newCardHp;
    arr[select].def = 0;
  }
};

export const goldenInstrument = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === "Gutenberg Mariachi") {
      let newDef = arr[i].def + 650;
      arr[i].def = newDef;
      return;
    }
  }
};

export const mariachiOnPlay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].def > 150) {
      let newDef = arr[i].def - 150;
      arr[i].def = newDef;
    } else if (arr[i].def <= 150) {
      let remainDmg = 150 - arr[i].def;
      let newCardHp = arr[i].hp - remainDmg;
      arr[i].hp = newCardHp;
      arr[i].def = 0;
    }
  }
};

export const jesperOnPlay = (arr, card) => {
  let attack = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "Programmer") {
      attack += 100;
    }
  }

  let newAtk = attack;
  let newCardAtk = card.atk + newAtk;
  card.atk = newCardAtk;
};
