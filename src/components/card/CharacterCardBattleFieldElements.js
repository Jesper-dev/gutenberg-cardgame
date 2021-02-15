import styled from "styled-components";
import CardBackground from "../../Img/card-background-two.jpg";
import GoldTexture from "../../Img/gold-texture.jpg";
import DescBack from "../../Img/desc-back.jpg";
import { ReactComponent as Hearth } from "../../Img/health.svg";

export const CardWrapper = styled.div`
  height: 260px;
  width: 160px;
  border-radius: 10px;
  border: 5px solid transparent;
  border-image: url(${GoldTexture}) 1;

  margin-left: 10px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  /*  height: 100vh;
  width: 100vw; */
  box-shadow: 12px 10px 28px 3px #000;
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
  text-align: center;
  /* max-height: 35px;
  overflow: hidden; */
  color: #000;
  font-family: "Lobster", cursive;
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

export const AtkDefWrapper = styled.span`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  width: 160px;
  margin-top: 0%;
`;

export const Atk = styled.p`
  color: green;
  margin-left: 5px;
  font-size: 0.9rem;
`;

export const Def = styled.p`
  color: blue;
  margin-right: 20px;
  font-size: 0.9rem;
`;

export const DescriptionText = styled.p`
  font-family: "EB Garamond", serif;
  font-weight: 700;

  margin-top: 2%;
  width: 135px;
  max-height: 70px;
  overflow: hidden;
  padding: 5px;
  margin-bottom: 0;
  border: 1px solid black;
  border-radius: 4px;
  background: #fff;
  background-image: url(${DescBack});
  background-position: center; /* Center the image */
  background-size: cover;
  font-size: 0.7rem;
`;

export const HPWrapper = styled.span`
  margin-top: 8%;
  width: 100%;
  height: 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const HP = styled.p`
  font-family: "Old Standard TT", serif;
  font-weight: 700;
  height: 20px;
  margin-right: 15px;
  text-shadow: 1.5px 1.5px 1.5px #000;
  color: #e81717;
`;

export const StyledHearth = styled(Hearth)`
  width: 21%;
  height: 100%;
`;
