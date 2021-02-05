import styled from "styled-components";
import Background from "../../Img/wood-board.jpg";
import GoldTexture from "../../Img/gold-texture.jpg";

export const CanvasWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: Background;
  background-image: url(${Background}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 100vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;
export const StartGameButton = styled.button`
  position: absolute;
  font-weight: bold;
  font-family: "Lobster", cursive;
  font-size: 1.8rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px 40px;
  border-radius: 8px;

  box-shadow: 5px 10px 5px #000;
  background-image: url(${GoldTexture}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  transition: 0.8s ease-in-out;

  :hover {
    transition: 0.8s ease-in-out;
    padding: 50px 50px;
    font-size: 2.2rem;
  }
`;

export const EndTurnButton = styled.button`
  z-index: 100;

  position: absolute;
  font-weight: bold;
  font-family: "Lobster", cursive;
  font-size: 1.8rem;
  top: 50%;
  left: 95%;
  transform: translate(-50%, -100%);

  background: Background;
  background-image: url(${GoldTexture}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  padding: 10px 30px;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  :focus {
    outline: none;
  }
  /* 
  :hover {
    transition: 0.3s ease-in-out;
    padding: 12px 32px;
  } */
`;

export const NotEnoughError = styled.h2`
  z-index: 100;
  position: absolute;
  font-family: "Lobster", cursive;
  font-size: 2.4rem;
  font-weight: normal;
  top: 50%;
  left: 50%;
  transform: translate(-270%, 100%);
  color: gold;
`;
export const AlreadyAtked = styled.h2`
  z-index: 100;
  position: absolute;
  font-family: "Lobster", cursive;
  font-weight: normal;
  font-size: 2.4rem;
  top: 68%;
  left: 35%;
  /*   transform: translate(-100%, 100%); */
  color: #ff0f0f;
  -webkit-text-stroke: 1px black;
`;

export const TurnInicator = styled.h2.attrs((props) => ({
  top: props.top,
  left: props.left,
  font: props.font,
}))`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-size: ${(props) => props.font};
  font-family: "Lobster", cursive;
  font-weight: lighter;
  color: goldenrod;
  text-shadow: 5px 5px 5px #000;
  -webkit-text-stroke: 1px black;
`;

export const WonGamePage = styled.div`
  position: absolute;
  background: Background;
  background-image: url(${Background}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 100vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0%;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
`;

export const WonGamePageButton = styled.button`
  position: absolute;
  z-index: 999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: Background;
  background-image: url(${GoldTexture}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  font-family: "Lobster", cursive;
  font-size: 2rem;
  font-weight: normal;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  width: 10vw;
  height: 8vh;

  transition: 0.8s ease-in-out;
  :hover {
    transition: 0.8s ease-in-out;
    width: 12vw;
    height: 10vh;
    font-size: 2.4rem;
  }
`;
export const WonGamePageHeader = styled.h1`
  position: absolute;
  z-index: 999999;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: normal;
  font-family: "Lobster", cursive;
  font-size: 2.3rem;
`;
