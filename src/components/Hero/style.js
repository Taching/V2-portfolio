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

export const Title = styled.h1`
  color: ${color.white};
`
export const HeroStyle = styled.div`
  height: 300px;
  p {
    color: ${color.MossGreen};
    background-color: ${color.Black2};
    text-decoration: line-through;
    width: max-content;
  }
`
