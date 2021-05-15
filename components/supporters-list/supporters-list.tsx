import { ReactNode } from "react"
import styled from "styled-components"

/**
 * <Styles>
 */

const Container = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-gap: 24px;
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const SupportersList = ({ children }: Props) => {
  return <Container>{children}</Container>
}
