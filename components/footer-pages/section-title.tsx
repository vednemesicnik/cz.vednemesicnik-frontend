import React from "react"
import styled from "styled-components"
import { font } from "assets/font"

/**
 * Styles
 */

const Text = styled("span")`
  font-size: 16px;
  font-weight: ${font.weight.medium};
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
