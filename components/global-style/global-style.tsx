import { createGlobalStyle } from "styled-components"
import { getSeasonColor } from "helpers"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: sans-serif;
    font-weight: 400;
    background-color: ${getSeasonColor()};
  }
`
