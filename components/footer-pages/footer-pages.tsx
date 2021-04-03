import styled from "styled-components"
import { PagesList } from "./pages-list"
import LinkWrapper from "next/link"
import { Section } from "./section"
import { SectionTitle } from "components/footer-pages/section-title"
import { font } from "assets/font"
import { palette } from "assets/palette"

/**
 * Styles
 */

const Container = styled("div")`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-column-gap: 120px;
  grid-area: pages;

  @media all and (max-width: 689px) {
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    grid-row-gap: 20px;
  }
`

const Link = styled("a")`
  font-size: 16px;
  font-weight: ${font.weight.regular};
  color: ${palette.WEB_BLACK};
  cursor: pointer;
  padding: 6px 0;

  &:hover {
    text-decoration: underline;
  }
`

/**
 * Component
 */

type Props = {
  children?: never
}

export const FooterPages = (_props: Props) => {
  return (
    <Container>
      {/*<Section>*/}
      {/*  <SectionTitle>Rubriky</SectionTitle>*/}
      {/*  <PagesList>*/}
      {/*    <LinkWrapper href={"/"}>*/}
      {/*      <Link>???</Link>*/}
      {/*    </LinkWrapper>*/}
      {/*    <LinkWrapper href={"/"}>*/}
      {/*      <Link>???</Link>*/}
      {/*    </LinkWrapper>*/}
      {/*  </PagesList>*/}
      {/*</Section>*/}
      <Section>
        <SectionTitle>O nás</SectionTitle>
        <PagesList>
          <LinkWrapper href={"/editorial-board"}>
            <Link>Redakce</Link>
          </LinkWrapper>
          <LinkWrapper href={"/organization"}>
            <Link>Spolek</Link>
          </LinkWrapper>
        </PagesList>
      </Section>
      {/*<Section>*/}
      {/*  <SectionTitle>Ostatní</SectionTitle>*/}
      {/*  <PagesList>*/}
      {/*    <LinkWrapper href={"/archive"}>*/}
      {/*      <Link>Archiv</Link>*/}
      {/*    </LinkWrapper>*/}
      {/*    <LinkWrapper href={"/support"}>*/}
      {/*      <Link>Podpora</Link>*/}
      {/*    </LinkWrapper>*/}
      {/*  </PagesList>*/}
      {/*</Section>*/}
    </Container>
  )
}
