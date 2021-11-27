import cuid from "cuid"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "components/social-site-icons"
import styled from "styled-components"

/**
 * Constants
 */

const ICON_COLOR = "#FFFFFF"

/**
 * Styles
 */

const Container = styled("div")`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-area: social-sites;
  justify-self: end;
  align-self: start;

  @media all and (max-width: 689px) {
    justify-self: center;
  }
`

const Link = styled("a")`
  display: flex;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
`

/**
 * Social Sites
 */

const socialSites = [
  {
    id: cuid(),
    title: "Facebook",
    link: "https://www.facebook.com/vednemesicnik",
    icon: <FacebookIcon color={ICON_COLOR} />,
  },
  {
    id: cuid(),
    title: "Instagram",
    link: "https://www.instagram.com/vednemesicnik/",
    icon: <InstagramIcon color={ICON_COLOR} />,
  },
  {
    id: cuid(),
    title: "Twitter",
    link: "https://twitter.com/vednemesicnik",
    icon: <TwitterIcon color={ICON_COLOR} />,
  },
]

/**
 * Component
 */

type Props = {
  children?: never
}

export const SocialSites = (_props: Props) => {
  return (
    <Container>
      {socialSites.map((socialSite) => (
        <Link key={socialSite.id} href={socialSite.link} title={socialSite.title}>
          {socialSite.icon}
        </Link>
      ))}
    </Container>
  )
}
