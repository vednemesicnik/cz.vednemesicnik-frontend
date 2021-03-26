import React from "react"
import styled from "styled-components"

/**
 * Styles
 */

const Container = styled("main")`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  grid-area: content;
`

const Box = styled("div")`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 40px;
`

/**
 * Component
 */

type Props = {
  children: React.ReactNode
}

export const PageContent = ({ children }: Props) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  )
}
