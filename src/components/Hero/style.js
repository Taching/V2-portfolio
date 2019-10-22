import styled, { css } from "styled-components"
import { color, media, getOuterSpace } from "../../styles/Utils"

export const Wrapper = styled.div`
  font-size: 1.7rem;
  max-width: 36rem;
  line-height: 1.3em;
  ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 100%;
    font-size: 1.5rem;
  `}
  ${media.xs`
    font-size: 1.35rem;
  `}
  ${props =>
    props.fixed
      ? css`
          ${getOuterSpace("padding")};
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          text-align: right;
          ${media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
        `
      : css`
          text-align: left;
        `}
`

export const HeroStyle = styled.div`
  height: 300px;
`
export const Name = styled.h1`
  color: ${color.MossGreen};
  background-color: ${color.Black2};
  font-weight: 200;
  font-size: 3rem;
  width: max-content;
`
export const Title = styled.p`
  color: ${color.Mint};
  font-size: 1.5rem;
`
export const Sub = styled.span`
  color: ${color.white};
  font-size: 1.3rem;
`
export const Social = styled.ul`
  list-style: none;
`
