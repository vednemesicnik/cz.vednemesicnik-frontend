import React, { Fragment } from "react"
import Head from "next/head"
import { PageHeader } from "components/page-header"
import { Navigation } from "components/navigation"
import { PageContent } from "components/page-content"
import { PageFooter } from "components/page-footer"
import { FooterLink } from "components/footer-link"
import { palette } from "assets/palette"
import { NavigationMenu } from "components/navigation-menu"
import { NavigationMenuItem } from "components/navigation-menu-item"
import { Page } from "components/page"

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Vedneměsíčník</title>
        {/* Favicon */}
        <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
        <link rel={"alternate icon"} href={"/favicon.ico"} />
      </Head>

      <Page>
        <PageHeader>
          <Navigation>
            <NavigationMenu>
              <NavigationMenuItem href={"http://archiv.vednemesicnik.cz"}>{`Archiv`}</NavigationMenuItem>
            </NavigationMenu>
          </Navigation>
        </PageHeader>

        <PageContent>
          <h1 style={{ fontSize: "2em", whiteSpace: "pre-wrap" }}>
            {`Všechny naše články najdete na `}
            <a href={"https://medium.com/vednemesicnik"} style={{ color: palette.VDM_SG }}>
              medium.com/
              <wbr />
              vednemesicnik
            </a>
          </h1>
        </PageContent>

        <PageFooter>
          <FooterLink
            href={"https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=794899&typ=PLATNY"}
          >{`Vedneměsíčník, z. s.`}</FooterLink>
        </PageFooter>
      </Page>
    </Fragment>
  )
}

export default Home
