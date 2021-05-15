import { Children } from "react"
import styled from "styled-components"

/**
 * Styles
 */

const List = styled("ul")`
  display: grid;
  position: relative;
  grid-auto-flow: row;
  grid-auto-columns: max-content;
  grid-column-gap: 20px;
  margin: 0;
  padding: 0;

  @media all and (max-width: 689px) {
    justify-items: center;
  }
`

const ListItem = styled("li")`
  display: flex;
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

export const PagesList = ({ children }: Props) => {
  return (
    <List>
      {Children.map(children, (child) => (
        <ListItem>{child}</ListItem>
      ))}
    </List>
  )
}
