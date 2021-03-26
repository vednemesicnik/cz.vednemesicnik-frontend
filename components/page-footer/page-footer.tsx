import React from "react"
import styled from "styled-components"
import { palette } from "assets/palette"
import { FooterSocialSites } from "components/footer-social-sites"

/**
 * Styles
 */

const Container = styled("footer")`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${palette.VDM_SG};
  background-image: linear-gradient(160deg, ${palette.VDM_SG} 0%, #ffffff 100%);
  grid-area: footer;
`

const Content = styled("div")`
  display: grid;
  position: relative;
  width: 100%;
  max-width: 1440px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content;
  padding: 40px;
  grid-template-areas: "info social-sites";

  @media all and (max-width: 689px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
    grid-template-areas:
      "social-sites"
      "info";
    justify-items: center;
    grid-row-gap: 20px;
  }
`

const Info = styled("span")`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
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
        <FooterSocialSites />
        <Info>Tento web provozuje Vedneměsíčník, z. s</Info>
      </Content>
    </Container>
  )
}
