import styled from "styled-components"
import { size } from "assets/size"
import { ReactNode } from "react"

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
  max-width: ${size.pageMaxWidth};
  padding: 40px;
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const PageContent = ({ children }: Props) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  )
}
