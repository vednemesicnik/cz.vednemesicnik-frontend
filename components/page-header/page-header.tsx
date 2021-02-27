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
  grid-area: header;
`

/**
 * Component
 */

type Props = {
  children: React.ReactNode
}

export const PageHeader = ({ children }: Props) => {
  return <Container>{children}</Container>
}
