import styled from "styled-components";
import GoldTexture from "../../Img/gold-texture.jpg";
import CardBackground from "../../Img/card-background.jpg";
import DescBack from "../../Img/desc-back.jpg";

export const CardWrapper = styled.div`
  height: 240px;
  width: 140px;
  border-radius: 10px;
  border: 5px solid transparent;
  border-image: url(${GoldTexture}) 1;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  margin-left: 10px;

  background: Background;
  background-image: url(${CardBackground}); /* The image used */
  background-color: #fff; /* Used if the image is unavailable */
  /*  height: 100vh;  */ /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
`;

export const CardName = styled.h3`
  margin-top: 2%;
  margin-bottom: 1%;
  color: grey;
`;

export const CardImg = styled.img`
  margin-top: 0%;
  height: 80px;
  width: 120px;
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
  width: 120px;
  height: 90px;
  padding: 2px 2px;
  font-size: 0.8rem;
  border: 1px solid black;
  background: #fff;
  background-image: url(${DescBack});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;

export const CostWrapper = styled.div`
  margin-top: 2%;
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
  margin-right: 18px;
`;
