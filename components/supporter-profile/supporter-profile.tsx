import styled from "styled-components"
import { font } from "assets/font"

/**
 * Styles
 */

const Container = styled("a")`
  display: flex;
  position: relative;
  width: 160px;
  height: 160px;
  background-color: white;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
`

const Name = styled("span")`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 13, 23, 0.8);
  padding: 4px 8px;
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: ${font.weight.regular};
  opacity: 0;
  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`

/**
 * Component
 */

type Props = {
  children?: never
  url: string
  name: string
  logo: string
}

export const SupporterProfile = ({ url, name, logo }: Props) => {
  return (
    <Container href={url} title={name}>
      <Image src={logo} alt={name} />
      <Name>{name}</Name>
    </Container>
  )
}
