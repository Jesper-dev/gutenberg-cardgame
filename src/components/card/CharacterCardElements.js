import styled from "styled-components";
import CardBackground from "../../Img/card-background-two.jpg";
import GoldTexture from "../../Img/gold-texture.jpg";
import DescBack from "../../Img/desc-back.jpg";



export const CardWrapper = styled.div`
  height: 270px;
  width: 170px;
  border-radius: 10px;
  border: 5px solid transparent;

  border-image: url(${GoldTexture}) 1;

  margin-left: 15px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  box-shadow: 12px 10px 28px 3px #000;
  background: Background;
  background-image: url(${CardBackground}); 
  background-color: #fff; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  margin-top: 100px;

  
  
  &:hover {
    cursor: pointer;
    margin-top: 0px;
  }

`;

export const CardName = styled.h3`
  margin-top: 2%;
  margin-bottom: 1%;
  color: #000;
  font-family: "Lobster", cursive;
`;

export const CardImg = styled.img`
  margin-top: 0%;
  height: 90px;
  width: 130px;
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
  margin-top: 1%;
`;

export const Atk = styled.p`
  color: green;
  margin-left: 18px;
  font-size: 0.9rem;
`;

export const Def = styled.p`
  color: blue;
  margin-right: 20px;
  font-size: 0.9rem;
`;

export const DescriptionText = styled.p`
  margin-top: 2%;
  width: 150px;
  height: px;
  overflow: hidden;
  padding: 5px;
  margin-bottom: 0;
  border: 1px solid black;
  border-radius: 4px;
  background: #fff;
  background-image: url(${DescBack});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;

export const CostHpWrapper = styled.span`
  margin-top: 5px;
  width: 170px;
  height: 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const HP = styled.p`
  width: 55px;
  height: 20px;
  color: red;
`;

export const Cost = styled.p`
  width: 55px;
  height: 20px;
  color: white;
`;
