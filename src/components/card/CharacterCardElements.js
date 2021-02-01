import styled, { css, keyframes } from "styled-components";
import CardBackground from "../../Img/card-background-two.jpg";
import GoldTexture from "../../Img/gold-texture.jpg";
import DescBack from "../../Img/desc-back.jpg";
import { after } from "lodash";

import { ReactComponent as Shield } from '../../Img/defense.svg'
import { ReactComponent as Sword } from '../../Img/attack.svg'
import { ReactComponent as Hearth } from '../../Img/health.svg'

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
        
  background-color: #fff; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  margin-top: 100px;
  position: relative;
  
  &:hover {
    cursor: pointer;
    margin-top: 0px;
  }


  ${({ active }) =>
    active &&
    css`
      border: 5px solid red;
    ` }
`;


export const CardName = styled.h3`
z-index: 2;
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

export const AtkDefWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 20px;
width: 170px;
/* margin-top: 1%; */
`;

export const AtkWrapper = styled.div`
display: flex;
flex-direction: row;
height: 20px;
align-items: center;
justify-content: flex-start;

`
export const DefWrapper = styled.div`
display: flex;
flex-direction: row;
height: 20px;
align-items: center;
justify-content: flex-end;

`

export const Atk = styled.p`
font-family: 'EB Garamond', serif;
font-weight: 800;
color: green;
font-size: 1.2rem;
`;

export const Def = styled.p`
font-family: 'EB Garamond', serif;
font-weight: 800;
color: blue;

margin-right: 10px;
font-size: 1.2rem;
`;

export const DescriptionText = styled.p`
font-family: 'EB Garamond', serif;
font-weight: 700;

margin-top: 2%;
width: 150px;
max-height: 130px;
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
width: 65px;
height: 20px;
color: white;
`;

export const StyledShield = styled(Shield)`
  width: 100%;
  height: 100%;
`
export const StyledSword = styled(Sword)`
  width: 50%;
  height: 100%;
`
export const StyledHearth = styled(Hearth)`
  width: 20%;
  height: 20%;
`