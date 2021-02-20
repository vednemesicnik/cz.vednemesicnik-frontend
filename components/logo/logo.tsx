import React from "react"

/**
 * Component
 */

type Props = {
  children?: never
}

export const Logo = (_props: Props) => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox={"0 0 1000 1000"}
      version={"1.1"}
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      xmlSpace={"preserve"}
      style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 1.41421 }}
    >
      <clipPath id={"_clip1"}>
        <rect x={"0"} y={"0"} width={"1000"} height={"1000"} />
      </clipPath>
      <g clipPath={"url(#_clip1)"}>
        <rect x={"608"} y={"152"} width={"168"} height={"696"} style={{ fill: "url(#_Linear2)" }} />
        <path d={"M200,152l192,0l384,648l0,48l-168,0l-408,-696Z"} style={{ fill: "#4effa0" }} />
        <path
          d={"M0,1000l0,-1000l1000,0l0,1000l-1000,0Zm928,-72l0,-856l-856,0l0,856l856,0Z"}
          style={{ fill: "#4cffa0" }}
        />
      </g>
      <defs>
        <linearGradient
          id={"_Linear2"}
          x1={"0"}
          y1={"0"}
          x2={"1"}
          y2={"0"}
          gradientUnits={"userSpaceOnUse"}
          gradientTransform={"matrix(576,-696,696,576,200,848)"}
        >
          <stop offset={"0"} style={{ stopColor: "#000", stopOpacity: 1 }} />
          <stop offset={"0.2"} style={{ stopColor: "#1e653f", stopOpacity: 1 }} />
          <stop offset={"0.42"} style={{ stopColor: "#3ece81", stopOpacity: 1 }} />
          <stop offset={"1"} style={{ stopColor: "#4dffa0", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  )
}
