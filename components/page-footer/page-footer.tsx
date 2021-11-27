import styled from "styled-components"
import { palette } from "assets/palette"
import { SocialSites } from "components/page-footer/social-sites"
import { size } from "assets/size"
import { font } from "assets/font"
import { Pages } from "components/page-footer/pages"

/**
 * Theme
 */

const theme = {
  fontColor: ["#FFFFFF"],
}

/**
 * Styles
 */

const Container = styled("footer")`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${palette.richBlack};
  border-top: 4px solid ${palette.mediumSpringGreen};
  grid-area: footer;
`

const Content = styled("div")`
  display: grid;
  position: relative;
  width: 100%;
  max-width: ${size.pageMaxWidth};
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content max-content;
  padding: 40px;
  grid-template-areas:
    "pages social-sites"
    "info info";
  grid-row-gap: 60px;

  @media all and (max-width: 689px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    grid-template-areas:
      "social-sites"
      "pages"
      "info";
    justify-items: center;
  }
`

const Info = styled("span")`
  font-size: 12px;
  font-weight: ${font.weight.regular};
  grid-area: info;
  align-self: center;
  color: ${theme.fontColor[0]};
`

/**
 * Component
 */

type Props = {
  children?: never
}

export const PageFooter = (_props: Props) => {
  return (
    <Container>
      <Content>
        <Pages />
        <SocialSites />
        <Info>Tento web provozuje Vedneměsíčník, z. s</Info>
      </Content>
    </Container>
  )
}
