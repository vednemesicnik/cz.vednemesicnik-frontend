import React from "react"
import cuid from "cuid"
import {
  FacebookIcon /*, GithubIcon*/,
  InstagramIcon,
  TwitterIcon /*, YoutubeIcon*/,
} from "components/social-site-icons"
import styled from "styled-components"

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
    title: "Facebook | Vedneměsíčník",
    link: "https://www.facebook.com/vednemesicnik",
    icon: <FacebookIcon />,
  },
  {
    id: cuid(),
    title: "Instagram | Vedneměsíčník",
    link: "https://www.instagram.com/vednemesicnik/",
    icon: <InstagramIcon />,
  },
  {
    id: cuid(),
    title: "Twitter | Vedneměsíčník",
    link: "https://twitter.com/vednemesicnik",
    icon: <TwitterIcon />,
  },
  // {
  //   id: cuid(),
  //   title: "YouTube | Vedneměsíčník",
  //   link: "https://www.youtube.com/channel/UClHA5jiAjs11Vvotq1nUfHw",
  //   icon: <YoutubeIcon />,
  // },
  // {
  //   id: cuid(),
  //   title: "GitHub | Vedneměsíčník",
  //   link: "https://github.com/vednemesicnik",
  //   icon: <GithubIcon />,
  // },
]

/**
 * Component
 */

type Props = {
  children?: never
}

export const FooterSocialSites = (_props: Props) => {
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
