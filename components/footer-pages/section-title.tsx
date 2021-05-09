import styled from "styled-components"
import { font } from "assets/font"
import { palette } from "assets/palette"

/**
 * Styles
 */

const Text = styled("span")`
  font-size: 16px;
  font-weight: ${font.weight.medium};
  color: hsla(0, 0%, 0%, 0.8);

  @media (prefers-color-scheme: dark) {
    color: hsla(0, 0%, 100%, 0.8);
  }
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
