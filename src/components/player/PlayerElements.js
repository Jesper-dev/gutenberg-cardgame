import styled from "styled-components";

export const PlayerFiledContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 85px;
  height: 35vh;
  width: 100vw;
`;

export const CardContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

export const GoldStatus = styled.h2`
  color: gold;
  font-size: 2.5rem;
`;

export const PlayCardButton = styled.button`
  background: goldenrod;
  color: seashell;
  height: 30px;
`;

export const LeftToolBarContainer = styled.div`
  padding-left: 25px;
`;

export const RightToolBarContainer = styled.div`
  /* border: 1px solid black; */
  width: 600px;
  height: 400px;
  margin-right: 2%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
`;

export const Hpcontainer = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid green;
  border-radius: 50px;
  font-size: 2rem;
  font-family: "Lobster", cursive;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;
