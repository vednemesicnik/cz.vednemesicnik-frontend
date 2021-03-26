import React, { Fragment } from "react"
import Head from "next/head"
import { PageHeader } from "components/page-header"
import { PageContent } from "components/page-content"
import { PageFooter } from "components/page-footer"
import { palette } from "assets/palette"
import { Page } from "components/page"
import { Favicon } from "components/favicon"
import { PageNavigation } from "components/page-navigation"

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Vedneměsíčník</title>
        <Favicon />
      </Head>

      <Page>
        <PageHeader>
          <PageNavigation />
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

        <PageFooter />
      </Page>
    </Fragment>
  )
}

export default Home
