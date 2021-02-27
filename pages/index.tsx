import Head from "next/head"
import { Header } from "components/header"
import { Navigation } from "components/navigation"
import { Page } from "components/page"
import { Footer } from "components/footer"
import { FooterLink } from "components/footer-link"
import { palette } from "assets/palette"
import { NavigationMenu } from "components/navigation-menu"
import { NavigationMenuItem } from "components/navigation-menu-item"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Vedneměsíčník</title>
        {/* Favicon */}
        <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
        <link rel={"alternate icon"} href={"/favicon.ico"} />
      </Head>

      <Header>
        <Navigation>
          <NavigationMenu>
            <NavigationMenuItem href={"http://archiv.vednemesicnik.cz"}>{`Archiv`}</NavigationMenuItem>
          </NavigationMenu>
        </Navigation>
      </Header>

      <Page>
        <h1 style={{ fontSize: "2em", whiteSpace: "pre-wrap" }}>
          {`Všechny naše články najdete na `}
          <a href={"https://medium.com/vednemesicnik"} style={{ color: palette.VDM_SG }}>
            medium.com/
            <wbr />
            vednemesicnik
          </a>
        </h1>
      </Page>

      <Footer>
        <FooterLink
          href={"https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=794899&typ=PLATNY"}
        >{`Vedneměsíčník, z. s.`}</FooterLink>
      </Footer>
    </div>
  )
}

export default Home
