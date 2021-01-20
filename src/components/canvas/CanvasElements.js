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
  /* background-color: #58391c; */
`;
export const StartGameButton = styled.button`
  position: absolute;
  font-weight: bold;
  font-family: 'Lobster', cursive;
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
