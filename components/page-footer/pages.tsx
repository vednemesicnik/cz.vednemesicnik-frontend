import styled from "styled-components"
import { PagesList } from "./pages-list"
import LinkWrapper from "next/link"
import { font } from "assets/font"
import { palette } from "assets/palette"

/**
 * Theme
 */

const theme = {
  fontColor: ["#FFFFFF", palette.mediumSpringGreen],
}

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

const Section = styled("div")`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  grid-template-areas:
    "title"
    "pages";
  grid-row-gap: 20px;

  @media all and (max-width: 689px) {
    justify-items: center;
  }
`

const SectionTitle = styled("span")`
  font-size: 16px;
  font-weight: ${font.weight.medium};
  color: ${theme.fontColor[0]};
`

const Link = styled("a")`
  font-size: 16px;
  font-weight: ${font.weight.regular};
  cursor: pointer;
  padding: 6px 0;
  color: ${theme.fontColor[1]};

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

export const Pages = (_props: Props) => {
  return (
    <Container>
      <Section>
        <SectionTitle>Obsah webu</SectionTitle>
        <PagesList>
          <LinkWrapper href={"/archive"}>
            <Link>Archiv</Link>
          </LinkWrapper>
          <LinkWrapper href={"/"}>
            <Link>Články</Link>
          </LinkWrapper>
          <LinkWrapper href={"/editorial-board"}>
            <Link>Redakce</Link>
          </LinkWrapper>
          <LinkWrapper href={"/organization"}>
            <Link>Spolek</Link>
          </LinkWrapper>
        </PagesList>
      </Section>
    </Container>
  )
}
