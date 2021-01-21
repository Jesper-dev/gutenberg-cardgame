import styled from "styled-components";
import GoldTexture from "../../Img/gold-texture.jpg";
import CardBackground from "../../Img/card-background.jpg";
import DescBack from "../../Img/desc-back.jpg";

export const CardWrapper = styled.div`
  height: 270px;
  width: 170px;
  border-radius: 10px;
  border: 5px solid transparent;
  box-shadow: 12px 10px 28px 3px #000;
  border-image: url(${GoldTexture}) 1;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  margin-left: 15px;

  background: Background;
  background-image: url(${CardBackground}); /* The image used */
  background-color: #fff; /* Used if the image is unavailable */
  /*  height: 100vh;  */ /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  margin-top: 100px;

  &:hover {
    cursor: pointer;
    border: 5px solid yellow;
    margin-top: 0px;
  }
`;

export const CardName = styled.h3`
  margin-top: 2%;
  margin-bottom: 1%;
  color: grey;
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

export const DescriptionText = styled.p`
  margin-top: 5%;
  width: 150px;
  height: 80px;
  padding: 2px 2px;
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  background-image: url(${DescBack});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;

export const CostWrapper = styled.div`
  margin-top: 2%;
  margin-right: 5%;
  width: 170px;
  height: 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const Cost = styled.p`
  width: 55px;
  height: 20px;
  color: blue;
`;
