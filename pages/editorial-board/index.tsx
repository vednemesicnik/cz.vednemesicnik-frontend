import { Fragment } from "react"
import { Page } from "components/page"
import { PageNavigation } from "components/page-navigation"
import { PageHeader } from "components/page-header"
import { PageFooter } from "components/page-footer"
import { PageContent } from "components/page-content"
import { PageHead } from "components/page-head"
import { GetStaticProps } from "next"
import fs from "fs"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"

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
      <PageHead pageTitle={"Redakce"} />

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
  const file = fs.readFileSync("pages/editorial-board/editorial-board.md", "utf8")
  const { data, content } = (matter(file) as unknown) as Props

  return {
    props: {
      data,
      content,
    },
  }
}
