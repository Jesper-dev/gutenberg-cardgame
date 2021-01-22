import styled from "styled-components";
/* import { ReactComponent as Swords} from "../../Img/swords.svg"; */
import GoldTexture from "../../Img/gold-texture.jpg";

export const PlayerFiledContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0px;
  height: 35vh;
  width: 100vw;
  overflow: hidden;
`;

export const OpponentCardContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  /* justify-content: space-evenly; */
`;

export const PlayerCardsContainer = styled.div`
  display: flex;
  position: absolute;
  height: 270px;
  bottom: 25px;
  left: 32%;
`;

export const GoldStatus = styled.h2`
  color: gold;
  font-size: 2.5rem;
`;

export const PlayCardButton = styled.button`
  margin-left: 3%;
  font-family: "Lobster", cursive;
  color: #000;
  height: 35px;

  border-radius: 5px;
  box-shadow: 5px 7px 5px #000;
  background-image: url(${GoldTexture}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  :hover{
    cursor: pointer;
  }
`;

export const LeftToolBarContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 3%;

`;

export const RightToolBarContainer = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  width: 400px;
  height: 400px;
  margin-right: 9%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
`;

export const Hpcontainer = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  border: 3px solid green;
  border-radius: 50px;
  font-size: 2rem;
  font-family: "Lobster", cursive;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

