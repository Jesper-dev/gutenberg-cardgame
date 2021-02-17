import styled, { css } from "styled-components";
import GoldTexture from "../../Img/gold-texture.jpg";
import CardBackground from "../../Img/card-background.jpg";
import DescBack from "../../Img/desc-back.jpg";
import { ReactComponent as Coin } from "../../Img/coin.svg";

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
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      border: 5px solid red;
    `}
`;

export const CardDeckWrapper = styled.div`
  width: 230px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardsLeftShow = styled.span`
  font-family: "Lobster", cursive;
  color: goldenrod;
  font-size: 1.7rem;
`;

export const CardsLeftBtnWrap = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const AddRemCard = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  font-family: "Lobster", cursive;
  color: goldenrod;
  cursor: pointer;
`;

export const CardName = styled.h3`
  margin-top: 2%;
  margin-bottom: 1%;
  font-family: "Lobster", cursive;
  color: #000;
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
  font-family: "EB Garamond", serif;
  font-weight: 700;
  margin-top: 5%;
  width: 150px;
  height: 80px;
  padding: 2px 2px 2px 2px;
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  background-image: url(${DescBack});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  font-size: 0.7rem;
`;

export const CostWrapper = styled.div`
  margin-top: 2%;
  margin-right: 5%;
  width: 170px;
  height: 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Cost = styled.p`
  font-family: "Old Standard TT", serif;
  font-weight: 700;
  margin-left: 5px;
  height: 20px;
  text-shadow: 1.5px 1.5px 1.5px #000;
  color: gold;
`;

export const StyledCoin = styled(Coin)`
  margin-left: 10px;
  width: 20%;
  height: 100%;
`;
