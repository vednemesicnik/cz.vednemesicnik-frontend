import styled from "styled-components"
import { size } from "assets/size"
import { ReactNode } from "react"

/**
 * Styles
 */

const Container = styled("header")`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: ${size.pageNavigationHeight};
  grid-area: header;
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const PageHeader = ({ children }: Props) => {
  return <Container>{children}</Container>
}
