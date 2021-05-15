import { Fragment } from "react"
import { font } from "assets/font"

type Props = {
  children?: never
}

export const Fonts = (_props: Props) => {
  return (
    <Fragment>
      {/* Regular */}
      <link rel={"preload"} href={font.path.regular.woff} as={"font"} type={"font/woff"} crossOrigin={""} />
      <link rel={"preload"} href={font.path.regular.woff2} as={"font"} type={"font/woff2"} crossOrigin={""} />
      {/* Medium */}
      <link rel={"preload"} href={font.path.medium.woff} as={"font"} type={"font/woff"} crossOrigin={""} />
      <link rel={"preload"} href={font.path.medium.woff2} as={"font"} type={"font/woff2"} crossOrigin={""} />
      {/* SemiBold */}
      <link rel={"preload"} href={font.path.semiBold.woff} as={"font"} type={"font/woff"} crossOrigin={""} />
      <link rel={"preload"} href={font.path.semiBold.woff2} as={"font"} type={"font/woff2"} crossOrigin={""} />
      {/* Bold */}
      <link rel={"preload"} href={font.path.bold.woff} as={"font"} type={"font/woff"} crossOrigin={""} />
      <link rel={"preload"} href={font.path.bold.woff2} as={"font"} type={"font/woff2"} crossOrigin={""} />
    </Fragment>
  )
}
