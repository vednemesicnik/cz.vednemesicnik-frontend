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

export const FacebookIcon = ({ color }: Props) => {
  return (
    <Svg
      width={"100%"}
      height={"100%"}
      viewBox={"0 0 400 400"}
      version={"1.1"}
      xmlns={"http://www.w3.org/2000/svg"}
      customColor={color}
    >
      <path d="M288.952,100L111.044,100C104.946,100 100.017,104.935 100.017,111.033L100.017,288.967C100.017,295.063 104.946,300 111.044,300L206.83,300L206.83,222.459L180.665,222.459L180.665,192.377L206.836,192.377L206.836,170.104C206.836,144.27 222.599,130.276 245.642,130.276C256.679,130.276 266.166,131.025 268.931,131.392L268.931,158.402L252.949,158.397C240.418,158.397 238.077,164.353 238.077,173.093L238.077,192.377L267.878,192.377L263.986,222.459L238.077,222.459L238.077,300L288.952,300C295.047,300 299.983,295.063 299.983,288.967L299.983,111.033C299.983,104.935 295.047,100 288.952,100Z" />
    </Svg>
  )
}
