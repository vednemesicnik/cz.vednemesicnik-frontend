import React from "react"
import styled from "styled-components"
import { font } from "assets/font"
import { palette } from "assets/palette"

/**
 * Styles
 */

const Text = styled("h1")`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 28px;
  font-weight: ${font.weight.bold};
  padding: 10px 20px;
  margin: 0 0 20px 0;
  background-color: ${palette.VDM_SG};
  background-image: linear-gradient(160deg, ${palette.VDM_SG} 0%, #ffffff 100%);
  border-radius: 2px;
`

/**
 * Component
 */

type Props = {
  children: React.ReactNode
}

export const Heading = ({ children }: Props) => {
  return <Text>{children}</Text>
}
