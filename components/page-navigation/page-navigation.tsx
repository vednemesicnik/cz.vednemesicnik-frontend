import React from "react"
import { NavigationMenu } from "components/navigation-menu"
import { NavigationMenuItem } from "components/navigation-menu-item"
import { Navigation } from "components/navigation"

type Props = {
  children?: never
}

export const PageNavigation = (_props: Props) => {
  return (
    <Navigation>
      <NavigationMenu>
        <NavigationMenuItem href={"http://archiv.vednemesicnik.cz"}>{`Archiv`}</NavigationMenuItem>
      </NavigationMenu>
    </Navigation>
  )
}
