import { NavigationMenu } from "components/page-navigation/navigation-menu"
import { NavigationMenuItem } from "components/page-navigation/navigation-menu-item"
import { Navigation } from "components/page-navigation/navigation"

/**
 * Component
 */

type Props = {
  children?: never
}

export const PageNavigation = (_props: Props) => {
  return (
    <Navigation>
      <NavigationMenu>
        <NavigationMenuItem href={"/"}>{`Články`}</NavigationMenuItem>
        <NavigationMenuItem href={"/editorial-board"}>{`Redakce`}</NavigationMenuItem>
        <NavigationMenuItem href={"/archive"}>{`Archiv`}</NavigationMenuItem>
      </NavigationMenu>
    </Navigation>
  )
}
