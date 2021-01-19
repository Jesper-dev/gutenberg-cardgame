import React from 'react'
import Canvas from "./components/canvas/Canvas"
import { createGlobalStyle } from 'styled-components'
import { CardsArray } from './components/cardsarray/CardArray'

const App = () => {

    return (
      <>
        <GlobalStyle />
        <Canvas array={CardsArray}/>
      </>
    )
}

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

export default App
