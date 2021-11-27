import { Fragment } from "react"
import { PageHeader } from "components/page-header"
import { PageContent } from "components/page-content"
import { PageFooter } from "components/page-footer"
import { Page } from "components/page"
import { PageNavigation } from "components/page-navigation"
import { PageHead } from "components/page-head"

const Home = () => {
  return (
    <Fragment>
      <PageHead />

      <Page>
        <PageHeader>
          <PageNavigation />
        </PageHeader>

        <PageContent>
          <h1 style={{ fontSize: "2em", whiteSpace: "pre-wrap" }}>
            {`Všechny naše články najdete na `}
            <a href={"https://medium.com/vednemesicnik"}>
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
