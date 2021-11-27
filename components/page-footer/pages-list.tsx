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

  @media all and (max-width: 689px) {
    grid-auto-flow: row;
    grid-row-gap: 12px;
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
  children: ReactNode
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
