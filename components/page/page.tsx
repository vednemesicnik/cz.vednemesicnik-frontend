import React from "react"
import styled from "styled-components"

/**
 * Styles
 */

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
`

const Grid = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content 1fr max-content;
  grid-template-areas:
    "header"
    "content"
    "footer";
  width: 100%;
  min-height: 100vh;
  max-width: 1440px;
  background-color: #ffffff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`

/**
 * Component
 */

type Props = {
  children: React.ReactNode
}

export const Page = ({ children }: Props) => {
  return (
    <Container>
      <Grid>{children}</Grid>
    </Container>
  )
}
