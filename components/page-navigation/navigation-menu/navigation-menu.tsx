import { Children, ReactNode } from "react"
import styled from "styled-components"

/**
 * Styles
 */

const List = styled("ul")`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-column-gap: 24px;
  margin: 0;
  padding: 0;
  justify-self: end;
  grid-area: menu;
`

const ListItem = styled("li")`
  position: relative;
  list-style: none;
  margin: 0;
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const NavigationMenu = ({ children }: Props) => {
  return (
    <List>
      {Children.map(children, (child, index) => (
        <ListItem key={`navigation-menu-item-${index}`}>{child}</ListItem>
      ))}
    </List>
  )
}
