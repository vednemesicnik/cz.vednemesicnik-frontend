import styled from "styled-components"
import { Logo } from "components/logo"
import Link from "next/link"
import { size } from "assets/size"
import { ReactNode } from "react"

/**
 * Styles
 */

const Container = styled("nav")`
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: ${size.pageNavigationHeight};
  background-color: #ffffff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const Box = styled("div")`
  display: grid;
  position: relative;
  width: 100%;
  max-width: ${size.pageMaxWidth};
  height: 100%;
  grid-template-columns: max-content auto;
  grid-template-rows: 1fr;
  grid-template-areas: "logo menu";
  align-items: center;
  padding: 0 40px;
`

const LogoWrapper = styled("a")`
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  grid-area: logo;
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const Navigation = ({ children }: Props) => {
  return (
    <Container>
      <Box>
        <Link href={"/"}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        {children}
      </Box>
    </Container>
  )
}
