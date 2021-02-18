import styled from "styled-components";
import Background from "../Img/wood-board.jpg";
import GoldTexture from "../Img/gold-texture.jpg";
import { Link as LinkS} from 'react-router-dom'

export const Wrapper = styled.div`
  height: 100vh;
  width: 99vw;
  background: Background;
  background-image: url(${Background}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: repeat; /* Do not repeat the image */
  background-size: cover;
  display: flex;
  flex-direction: row;
`;

export const InnerWrapper = styled.div`
  margin-top: 80px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DeckBuildHeader = styled.h1`
  margin-top: 0px;
  text-align: center;
  font-size: 3.5rem;
  font-family: "Lobster", cursive;
  font-weight: lighter;
  color: goldenrod;
  text-shadow: 5px 5px 5px #000;
  -webkit-text-stroke: 1px black;
`;

export const DeckShowWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 200vh;
  /*   z-index: 9999; */
  /*   background-color: #000; */
`;

export const DIV = styled.div`
  font-size: 3rem;
  height: 20%;
  width: 20%;
  border: 1px solid black;
`;

export const DeckBuildWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
 /*  justify-content: center; */
/*   background-color: lightgreen; */
  /*   justify-content: center; */
  right: 2%;
  top: 10%;
  width: 90%;
  height: 80vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
  ::-webkit-scrollbar-corner {
    color: transparent;
  }
  border: 5px solid transparent;
  border-image: url(${GoldTexture}) 1;
`;

export const DeckBuildText = styled.h3`
  text-align: center;
  font-family: "Lobster", cursive;
  font-weight: lighter;
  font-size: 1.7rem;
  color: goldenrod;
  text-shadow: 3px 3px 3px #000;
  -webkit-text-stroke: 1px black;
`;

export const DeckLength = styled.p`
  text-align: center;
  font-family: "Lobster", cursive;
  font-weight: lighter;
  font-size: 1.5rem;
  color: goldenrod;
  text-shadow: 3px 3px 3px #000;
  -webkit-text-stroke: 1px black;
`;


export const StyledLinked = styled(LinkS)`
  position: sticky;
  top: 10%;
  right: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lobster", cursive;
  font-weight: bold;
  font-size: 1.4rem;
  color: #000;
  text-decoration: none;
  background: url(${GoldTexture});
  background-position: center; /* Center the image */
  background-repeat: repeat; /* Do not repeat the image */
  background-size: cover;
  border-radius: 5px;
  width: 50%;
  height: 50px;
`