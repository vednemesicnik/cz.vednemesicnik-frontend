import { Fragment } from "react"

/**
 * Component
 */

type Props = {
  children?: never
}

export const Favicon = (_props: Props) => {
  return (
    <Fragment>
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link rel={"alternate icon"} href={"/favicon.ico"} />
    </Fragment>
  )
}
