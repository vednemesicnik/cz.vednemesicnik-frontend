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

export const InstagramIcon = ({ color }: Props) => {
  return (
    <Svg
      width={"100%"}
      height={"100%"}
      viewBox={"0 0 400 400"}
      version={"1.1"}
      xmlns={"http://www.w3.org/2000/svg"}
      customColor={color}
    >
      <path
        d={
          "M200,100C172.842,100 169.436,100.115 158.77,100.602C148.126,101.087 140.857,102.778 134.496,105.25C127.92,107.805 122.343,111.225 116.784,116.784C111.225,122.343 107.805,127.92 105.25,134.496C102.778,140.857 101.088,148.126 100.601,158.77C100.115,169.436 100,172.842 100,200C100,227.158 100.115,230.564 100.601,241.23C101.088,251.874 102.778,259.143 105.25,265.504C107.805,272.08 111.225,277.656 116.784,283.216C122.344,288.775 127.92,292.195 134.496,294.75C140.857,297.222 148.126,298.912 158.77,299.398C169.436,299.885 172.842,300 200,300C227.158,300 230.564,299.885 241.23,299.398C251.874,298.913 259.143,297.222 265.504,294.75C272.08,292.195 277.656,288.775 283.216,283.216C288.775,277.656 292.195,272.08 294.75,265.504C297.222,259.143 298.913,251.874 299.398,241.23C299.885,230.564 300,227.158 300,200C300,172.842 299.885,169.436 299.398,158.77C298.913,148.126 297.222,140.857 294.75,134.496C292.195,127.92 288.775,122.343 283.216,116.784C277.656,111.225 272.08,107.805 265.504,105.25C259.143,102.778 251.874,101.087 241.23,100.602C230.564,100.115 227.158,100 200,100ZM200,118.018C226.701,118.018 229.864,118.12 240.409,118.601C250.159,119.046 255.454,120.675 258.977,122.044C263.645,123.858 266.976,126.025 270.475,129.524C273.975,133.024 276.142,136.355 277.956,141.023C279.325,144.546 280.954,149.842 281.399,159.591C281.88,170.136 281.982,173.299 281.982,200C281.982,226.701 281.88,229.864 281.399,240.409C280.954,250.159 279.325,255.454 277.956,258.977C276.142,263.645 273.975,266.976 270.475,270.475C266.976,273.975 263.645,276.142 258.977,277.956C255.454,279.325 250.158,280.954 240.409,281.399C229.866,281.88 226.703,281.982 200,281.982C173.297,281.982 170.135,281.88 159.591,281.399C149.841,280.954 144.546,279.325 141.023,277.956C136.355,276.142 133.024,273.975 129.525,270.475C126.025,266.976 123.858,263.645 122.044,258.977C120.675,255.454 119.046,250.158 118.601,240.409C118.12,229.864 118.018,226.701 118.018,200C118.018,173.299 118.12,170.136 118.601,159.591C119.046,149.841 120.675,144.546 122.044,141.023C123.858,136.355 126.025,133.024 129.524,129.525C133.024,126.025 136.355,123.858 141.023,122.044C144.546,120.675 149.842,119.046 159.591,118.601C170.136,118.12 173.299,118.018 200,118.018"
        }
      />
      <path
        d={
          "M200,233.333C181.59,233.333 166.667,218.41 166.667,200C166.667,181.59 181.59,166.667 200,166.667C218.41,166.667 233.333,181.59 233.333,200C233.333,218.41 218.41,233.333 200,233.333ZM200,148.649C171.639,148.649 148.649,171.639 148.649,200C148.649,228.361 171.639,251.351 200,251.351C228.361,251.351 251.351,228.361 251.351,200C251.351,171.639 228.361,148.649 200,148.649M265.38,146.62C265.38,153.247 260.008,158.62 253.38,158.62C246.753,158.62 241.38,153.247 241.38,146.62C241.38,139.992 246.753,134.62 253.38,134.62C260.008,134.62 265.38,139.992 265.38,146.62"
        }
      />
    </Svg>
  )
}