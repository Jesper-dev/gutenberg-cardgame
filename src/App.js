import React from "react";
import Canvas from "./components/canvas/Canvas";
import { createGlobalStyle } from "styled-components";
import FunctionsComponent from "./components/FunctionsComponent";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <FunctionsComponent />
      {/* <Canvas array={CardsArray} /> */}
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    
    padding: 0;
    margin: 0;
  }
`;

export default App;
