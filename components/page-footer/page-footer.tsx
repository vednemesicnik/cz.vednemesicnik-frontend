import React from "react"
import styled from "styled-components"

/**
 * Styles
 */

const Container = styled("footer")`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  grid-area: footer;
`

const Box = styled("div")`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 40px;
`

/**
 * Component
 */

type Props = {
  children: React.ReactNode
}

export const PageFooter = ({ children }: Props) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  )
}
