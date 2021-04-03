import { Fragment } from "react"
import { Page } from "components/page"
import { PageNavigation } from "components/page-navigation"
import { PageHeader } from "components/page-header"
import { PageContent } from "components/page-content"
import { PageFooter } from "components/page-footer"
import { PageHead } from "components/page-head"

const Archive = () => {
  return (
    <Fragment>
      <PageHead pageTitle={"Archiv"} />

      <Page>
        <PageHeader>
          <PageNavigation />
        </PageHeader>

        <PageContent>
          <h1>Archiv</h1>
        </PageContent>

        <PageFooter />
      </Page>
    </Fragment>
  )
}

export default Archive
