import styled from "styled-components"
import { palette } from "assets/palette"
import LinkWrapper from "next/link"
import { Url } from "url"

/**
 * Theme
 */

const theme = {
  fontColor: [palette.richBlack],
}

/**
 * Styles
 */

const Link = styled("a")`
  display: flex;
  position: relative;
  text-transform: uppercase;
  color: ${theme.fontColor[0]};
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;

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
  href: Url["href"]
}

export const NavigationMenuItem = ({ children, href }: Props) => {
  return (
    <LinkWrapper href={href}>
      <Link>
        <Text>{children}</Text>
      </Link>
    </LinkWrapper>
  )
}
