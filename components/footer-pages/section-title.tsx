import React from "react"
import styled from "styled-components"
import { font } from "assets/font"

/**
 * Styles
 */

const Text = styled("span")`
  font-size: 16px;
  font-weight: ${font.weight.bold};
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
