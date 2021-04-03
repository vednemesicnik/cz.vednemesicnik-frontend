import { ReactNode } from "react"
import Head from "next/head"
import { Favicon } from "components/page-head/favicon"
import { Fonts } from "components/page-head/fonts"

type Props = {
  pageTitle?: string
  children?: ReactNode
}

export const PageHead = ({ pageTitle, children }: Props) => {
  const title = `${pageTitle ? `${pageTitle} | ` : ""}Vedneměsíčník`

  return (
    <Head>
      <title>{title}</title>
      <Favicon />
      <Fonts />
      {children}
    </Head>
  )
}
