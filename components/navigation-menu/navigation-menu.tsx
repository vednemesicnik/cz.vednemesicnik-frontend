import React from "react"
import styled from "styled-components"

/**
 * Styles
 */

const List = styled("ul")`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-column-gap: 20px;
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
  children: React.ReactNode
}

export const NavigationMenu = ({ children }: Props) => {
  return (
    <List>
      {React.Children.map(children, (child, index) => (
        <ListItem key={`navigation-menu-item-${index}`}>{child}</ListItem>
      ))}
    </List>
  )
}
