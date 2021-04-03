import React from "react"
import styled from "styled-components"

/**
 * Styles
 */

const Container = styled("div")`
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

/**
 * Component
 */

type Props = {
  children: React.ReactNode
}

export const Section = ({ children }: Props) => {
  return <Container>{children}</Container>
}
