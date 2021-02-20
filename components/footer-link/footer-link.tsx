import React from "react"
import styled from "styled-components"

/**
 * Styles
 */

const AnchorLink = styled("a")`
  color: #000000;
`

const Text = styled("span")`
  position: relative;
  font-size: 12px;
`

/**
 * Component
 */

type Props = {
  children: string
  href: string
}

export const FooterLink = ({ children, href }: Props) => {
  return (
    <AnchorLink target="_blank" rel="noopener noreferrer" href={href}>
      <Text>{children}</Text>
    </AnchorLink>
  )
}
