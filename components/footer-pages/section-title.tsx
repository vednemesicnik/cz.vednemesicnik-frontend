import React from "react"
import styled from "styled-components"
import { font } from "assets/font"
import { palette } from "assets/palette"

/**
 * Styles
 */

const Text = styled("span")`
  font-size: 16px;
  font-weight: ${font.weight.medium};
  color: ${palette.WEB_BLACK};
`

/**
 * Component
 */

type Props = {
  children: React.ReactNode
}

export const SectionTitle = ({ children }: Props) => {
  return <Text>{children}</Text>
}
