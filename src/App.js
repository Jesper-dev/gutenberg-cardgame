import React from "react";
import { createGlobalStyle } from "styled-components";
import FunctionsComponent from "./components/FunctionsComponent";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <FunctionsComponent />
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
