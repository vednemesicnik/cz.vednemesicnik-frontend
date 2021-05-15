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
        <NavigationMenuItem href={"http://archiv.vednemesicnik.cz"}>{`Archiv`}</NavigationMenuItem>
      </NavigationMenu>
    </Navigation>
  )
}
