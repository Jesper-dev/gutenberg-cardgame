import styled from "styled-components";
import GoldTexture from "../../Img/gold-texture.jpg";
import CardBack from "../../Img/card-deck-back.png";

export const OpponentDeckWrapper = styled.div`
  position: absolute;
  right: 1%;
  top: 16%;
`;
export const PlayerDeckWrapper = styled.div`
  position: absolute;
  right: 1%;
  bottom: 22%;
  
`;

export const PlayerCardsLeft = styled.span`
  font-size: 3rem;
  color: gold;
`
export const OpponentCardsLeft = styled.span`
  font-size: 3rem;
  color: gold;
`

export const VisualDeck = styled.div`
  width: 140px;
  height: 200px;
  margin: 10px;
  background: red;

  border: 5px solid transparent;
  border-image: url(${GoldTexture}) 1;
  /* box-shadow: 15px 15px 35px 5px #000; */
  border-radius: 10px;

  background: Background;
  background-image: url(${CardBack});
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const AttackButton = styled.button`
/*  position: absolute;
  right: 0;
  bottom: 0; */
`

export const OpponentHpcontainer = styled.button`
  position: absolute;
  top:2%;
  right: 10%;
  width: 100px;
  height: 100px;
  background: none;
  margin-bottom: 50px;
  border: 3px solid red;
  border-radius: 50px;
  font-size: 2rem;
  font-family: "Lobster", cursive;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`
