import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 350px;
  width: 200px;
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

export const DescriptionText = styled.p`
  margin-top: 5%;
  width: 160px;
  height: 90px;
  padding: 2px 2px;
  border: 1px solid black;
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
`;
