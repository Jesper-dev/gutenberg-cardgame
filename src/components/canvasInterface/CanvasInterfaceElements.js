import styled, { keyframes } from "styled-components";
import { ReactComponent as Swords } from "../../Img/swords.svg";
import { ReactComponent as Enemy } from "../../Img/enemy.svg";
import GoldTexture from "../../Img/gold-texture.jpg";
import CardBack from "../../Img/card-deck-back.png";
import { ReactComponent as Scroll } from "../../Img/scroll.svg";
import { ReactComponent as Gold } from "../../Img/coin.svg";

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
  font-family: "Old Standard TT", serif;
  font-size: 3rem;
  color: gold;
`;
export const OpponentCardsLeft = styled.span`
  font-family: "Old Standard TT", serif;
  font-size: 3rem;
  color: gold;
`;

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
`;

export const OpponentHpcontainer = styled.button`
  position: absolute;
  top: 2%;
  right: 10.5%;
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
`;
export const AttackText = styled.p`
  position: absolute;
  font-family: "Lobster", cursive;
  font-size: 2rem;
  bottom: 13.5%;
  right: 18%;
`;
const MoveSword = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(10deg);
  }
`;
export const StyledSwords = styled(Swords)`
  position: absolute;
  z-index: 999;
  bottom: 6.2%;
  right: 18%;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  animation: ${MoveSword} infinite 5s linear;
`;
export const EnemyAvatar = styled(Enemy)`
  position: absolute;
  /*  z-index: 9999; */
  top: 2%;
  left: 23%;
  width: 7%;
  height: 150px;
  cursor: pointer;
  /*   border: 1px solid black; */
`;

export const StyledGold = styled(Gold)`
  position: absolute;
  top: 25%;
  left: 115%;
  width: 50px;
  height: 40%;
`;

export const BattleMove = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  /*   justify-content: center; */

  left: 1%;
  top: 15%;
  width: 14%;
  height: 60%;
  overflow: hidden;
  border: 5px solid transparent;
  border-image: url(${GoldTexture}) 1;
`;

export const BattleMoveText = styled.h3`
  font-family: "Lobster", cursive;
  font-weight: lighter;
  font-size: 1.1rem;
  color: #000;
`;
