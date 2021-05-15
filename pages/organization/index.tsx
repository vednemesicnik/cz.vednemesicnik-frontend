import { Fragment } from "react"
import { Page } from "components/page"
import { PageNavigation } from "components/page-navigation"
import { PageHeader } from "components/page-header"
import { PageFooter } from "components/page-footer"
import { PageContent } from "components/page-content"
import { PageHead } from "components/page-head"
import matter from "gray-matter"
import * as fs from "fs"
import ReactMarkdown from "react-markdown"
import { GetStaticProps } from "next"

type Props = {
  content: string
  data: {
    editor: string
    date: string
  }
}

const Organization = (props: Props) => {
  return (
    <Fragment>
      <PageHead pageTitle={"Spolek"} />

      <Page>
        <PageHeader>
          <PageNavigation />
        </PageHeader>

        <PageContent>
          <ReactMarkdown children={props.content} />
        </PageContent>

        <PageFooter />
      </Page>
    </Fragment>
  )
}

export default Organization

export const getStaticProps: GetStaticProps<Props> = async () => {
  const file = fs.readFileSync("pages/organization/organization.md", "utf8")
  const { data, content } = (matter(file) as unknown) as Props

  return {
    props: {
      data,
      content,
    },
  }
}
