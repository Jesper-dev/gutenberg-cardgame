import styled from 'styled-components'
import GoldTexture from "../../Img/gold-texture.jpg";
import CardBack from "../../Img/card-deck-back.png";

export const CardWrapper = styled.div`
  position: absolute;
  left: 40%;
  top: 0;
/*   width: 100vw; */

  display: flex;
  flex-direction: row;
  align-items: center;


`;

export const OppenentCardHand = styled.div`
    
    width: 80px;
    height: 130px;
    margin: 10px;
    background: red;

    border: 5px solid transparent;
    border-image: url(${GoldTexture}) 1;
    box-shadow: 12px 10px 28px 3px #000;
    border-radius: 10px;

   
  background: Background;
  background-image: url(${CardBack}); 
  background-color: #fff; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
`