import React from "react"
import styled from "styled-components"

/**
 * Styles
 */

const Container = styled("header")`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 60px;
`

/**
 * Component
 */

type Props = {
  children: React.ReactNode
}

export const Header = ({ children }: Props) => {
  return <Container>{children}</Container>
}
