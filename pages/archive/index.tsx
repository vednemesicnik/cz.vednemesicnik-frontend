import { Fragment } from "react"
import { Page } from "components/page"
import { PageNavigation } from "components/page-navigation"
import { PageHeader } from "components/page-header"
import { PageFooter } from "components/page-footer"
import { PageContent } from "components/page-content"
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
          {`Archiv`}
        </PageContent>

        <PageFooter />
      </Page>
    </Fragment>
  )
}

export default Archive
