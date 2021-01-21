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

export const PlayerCardsLeft = styled.p`
`
export const OpponentCardsLeft = styled.p`
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
`;
