import styled, { css } from "styled-components"
import { color, media, getOuterSpace } from "../../styles/Utils"
import Img from "gatsby-image"
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
export const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
`
export const AvatarContainer = styled.div`
  height: 500px;
  width: 410px;
  position: absolute;
  right: 290px;
  top: -90px;
  z-index: -1;
`
export const HeroStyle = styled.div`
  height: 90vh;
`
export const Name = styled.h1`
  color: ${color.white};
  margin-bottom: 13px;
  font-weight: bold;
  font-size: 2rem;
  width: max-content;
`
export const Title = styled.p`
  color: ${color.white};
  font-size: 1.5rem;
`
export const Sub = styled.span`
  color: ${color.Gray3};
  font-size: 1.3rem;
`
export const Social = styled.ul`
  list-style: none;
`
export const Bar = styled.div`
  width: 70px;
  height: 1px;
  border-bottom: 1px solid #fff;
  margin-top: 20px;
  margin-bottom: 40px;
`
