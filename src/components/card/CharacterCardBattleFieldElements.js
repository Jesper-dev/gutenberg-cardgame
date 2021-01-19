import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 290px;
  width: 180px;
  border-radius: 10px;
  border: 1px solid black;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  background-color: lightgrey;

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
