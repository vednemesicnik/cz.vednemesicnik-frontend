import styled from "styled-components"
import { palette } from "assets/palette"
import { FooterSocialSites } from "components/footer-social-sites"
import { size } from "assets/size"
import { FooterPages } from "components/footer-pages"
import { font } from "assets/font"

/**
 * Styles
 */

const Container = styled("footer")`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${palette.green.light[4]};
  background-image: linear-gradient(160deg, ${palette.green.light[4]} 0%, ${palette.blue.light[6]} 100%);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  color: ${palette.WEB_BLACK};
  grid-area: info;
  align-self: center;
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
        <FooterPages />
        <FooterSocialSites />
        <Info>Tento web provozuje Vedneměsíčník, z. s</Info>
      </Content>
    </Container>
  )
}
