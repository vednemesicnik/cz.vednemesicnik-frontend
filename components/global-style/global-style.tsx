import { createGlobalStyle } from "styled-components"
import { palette } from "assets/palette"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: sans-serif;
    font-weight: 400;
    background-color: ${palette.VDM_SG};
  }
`
