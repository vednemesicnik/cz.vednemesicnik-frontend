import styled from "styled-components"

/**
 * Styles
 */

type SvgProps = { customColor: string | undefined }

const Svg = styled("svg")`
  fill: ${(props: SvgProps) => props.customColor ?? "#000000"};
`

/**
 * Component
 */

type Props = {
  children?: never
  color?: string
}

export const GithubIcon = ({ color }: Props) => {
  return (
    <Svg
      width={"100%"}
      height={"100%"}
      viewBox={"0 0 400 400"}
      version={"1.1"}
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      xmlSpace={"preserve"}
      style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
      customColor={color}
    >
      <path
        d={
          "M199.991,102.468c-55.22,0 -99.991,44.771 -99.991,100.003c0,44.182 28.65,81.66 68.388,94.89c5.003,0.914 6.826,-2.174 6.826,-4.826c0,-2.369 -0.086,-8.662 -0.135,-17.004c-27.815,6.04 -33.684,-13.408 -33.684,-13.408c-4.549,-11.547 -11.106,-14.623 -11.106,-14.623c-9.079,-6.206 0.688,-6.083 0.688,-6.083c10.037,0.712 15.317,10.307 15.317,10.307c8.919,15.28 23.407,10.866 29.104,8.312c0.909,-6.464 3.487,-10.872 6.348,-13.371c-22.205,-2.523 -45.551,-11.105 -45.551,-49.424c0,-10.915 3.898,-19.841 10.295,-26.833c-1.031,-2.53 -4.463,-12.696 0.976,-26.465c0,-0 8.398,-2.689 27.503,10.252c7.974,-2.216 16.532,-3.327 25.034,-3.364c8.49,0.037 17.048,1.148 25.035,3.364c19.092,-12.941 27.471,-10.252 27.471,-10.252c5.458,13.769 2.026,23.935 0.995,26.465c6.409,6.992 10.282,15.918 10.282,26.833c0,38.417 -23.383,46.871 -45.661,49.345c3.591,3.088 6.79,9.19 6.79,18.521c-0,13.364 -0.123,24.15 -0.123,27.428c0,2.677 1.799,5.789 6.876,4.813c39.706,-13.254 68.332,-50.707 68.332,-94.877c0,-55.232 -44.777,-100.003 -100.009,-100.003"
        }
      />
    </Svg>
  )
}
