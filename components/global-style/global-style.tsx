import { createGlobalStyle } from "styled-components"
import { font } from "assets/font"
import { palette } from "assets/palette"

export const GlobalStyle = createGlobalStyle`
  //IBM Plex Regular
  @font-face {
    font-family: ${font.family};
    src: url(${font.path.regular.woff2}) format("woff2"),
    url(${font.path.regular.woff}) format("woff");
    font-style: auto;
    font-weight: ${font.weight.regular};
    font-display: swap;
  }

  //IBM Plex Medium
  @font-face {
    font-family: ${font.family};
    src: url(${font.path.medium.woff2}) format("woff2"),
    url(${font.path.medium.woff}) format("woff");
    font-style: auto;
    font-weight: ${font.weight.medium};
    font-display: swap;
  }

  //IBM Plex SemiBold
  @font-face {
    font-family: ${font.family};
    src: url(${font.path.semiBold.woff2}) format("woff2"),
    url(${font.path.semiBold.woff}) format("woff");
    font-style: auto;
    font-weight: ${font.weight.semiBold};
    font-display: swap;
  }

  //IBM Plex Bold
  @font-face {
    font-family: ${font.family};
    src: url(${font.path.bold.woff2}) format("woff2"),
    url(${font.path.bold.woff}) format("woff");
    font-style: auto;
    font-weight: ${font.weight.bold};
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }
  
  a {
    color: ${palette.blue.light[0]};
  }

  body {
    margin: 0;
    font-family: ${font.family}, sans-serif;
    font-weight: ${font.weight.regular};
  }
`
