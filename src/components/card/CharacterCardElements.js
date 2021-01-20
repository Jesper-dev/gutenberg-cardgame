import styled from "styled-components";
import CardBackground from '../../Img/card-background-two.jpg'
import GoldTexture from '../../Img/gold-texture.jpg'
import DescBack from '../../Img/desc-back.jpg'

export const CardWrapper = styled.div`
  height: 350px;
  width: 200px;
  border-radius: 10px;
  border: 5px solid transparent;
  border-image: url(${GoldTexture}) 1;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;


 /*  height: 100vh;
  width: 100vw; */
  box-shadow: 12px 10px 28px 3px #000;
  background: Background;
  background-image: url(${CardBackground}); /* The image used */
  background-color: #fff; /* Used if the image is unavailable */
 /*  height: 100vh;  *//* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; 
  

  &:hover {
    cursor: pointer;
    border: 5px solid red;
  }
`;

export const CardName = styled.h3`
  margin-top: 2%;
  margin-bottom: 1%;
  color: #000;
  font-family: 'Lobster', cursive;
`;

export const CardImg = styled.img`
  margin-top: 0%;
  height: 120px;
  width: 170px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Type = styled.p`
  margin-top: 3%;
  margin-bottom: 0%;
  color: purple;
`;

export const AtkDefWrapper = styled.span`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  width: 170px;
  margin-top: 5%;
`;

export const Atk = styled.p`
  color: green;
  margin-left: 5px;
`;

export const Def = styled.p`
  color: blue;
  margin-right: 20px;
`;

export const DescriptionText = styled.p`
  margin-top: 5%;
  width: 160px;
  height: 90px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  background: #fff;
  background-image: url(${DescBack});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; 
`;

export const HPWrapper = styled.span`
  margin-top: 2%;
  width: 170px;
  height: 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const HP = styled.p`
  width: 55px;
  height: 20px;
  color: red;
`;
