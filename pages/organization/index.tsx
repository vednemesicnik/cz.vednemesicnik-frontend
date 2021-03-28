import React, { Fragment } from "react"
import { Page } from "components/page"
import { PageNavigation } from "components/page-navigation"
import { PageHeader } from "components/page-header"
import { PageFooter } from "components/page-footer"
import { PageContent } from "components/page-content"
import { PageHead } from "components/page-head/page-head"

const Organization = () => {
  return (
    <Fragment>
      <PageHead pageTitle={"Spolek"} />

      <Page>
        <PageHeader>
          <PageNavigation />
        </PageHeader>

        <PageContent>Spolek</PageContent>

        <PageFooter />
      </Page>
    </Fragment>
  )
}

export default Organization
