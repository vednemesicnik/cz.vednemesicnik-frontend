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
`

const Box = styled("div")`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 120px);
  padding: 40px;
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
      <Box>{children}</Box>
    </Container>
  )
}
