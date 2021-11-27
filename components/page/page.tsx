import styled from "styled-components"
import { ReactNode } from "react"

/**
 * Styles
 */

const Container = styled("div")`
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
  background-color: #ffffff;
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const Page = ({ children }: Props) => {
  return <Container>{children}</Container>
}
