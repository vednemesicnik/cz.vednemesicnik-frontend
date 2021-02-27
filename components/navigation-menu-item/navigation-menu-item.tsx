import React from "react"
import styled from "styled-components"

/**
 * Theme
 */

const theme = {
  fontColor: ["#000000"],
}

/**
 * Styles
 */

const Anchor = styled("a")`
  display: flex;
  position: relative;
  text-transform: uppercase;
  color: ${theme.fontColor[0]};
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 40px;

  &:hover {
    text-decoration: underline;
  }
`

const Text = styled("span")`
  position: relative;
  font-size: 14px;
  font-weight: 600;
`

/**
 * Component
 */

type Props = {
  children: string
  href?: string
}

export const NavigationMenuItem = ({ children, href }: Props) => {
  return (
    <Anchor href={href}>
      <Text>{children}</Text>
    </Anchor>
  )
}
