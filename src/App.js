import React from "react";
import { createGlobalStyle } from "styled-components";
import FunctionsComponent from "./components/FunctionsComponent";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Settings from './components/settings/Settings'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
        <Route exact path="/">
          <FunctionsComponent  />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        </Switch>
      </Router>
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
