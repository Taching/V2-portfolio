import styled from "styled-components"
import { fonts, media } from "@utils"
import { color } from "@color"
export const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-grow: 1;
  ${media.md`
    margin: 4.5rem;
  `}
  ${media.sm`
    margin: 3rem 4rem 0.7rem 0;
  `}
`

export const BlogTitle = styled.div`
  font-family: sans-serif;
  border-bottom: 1px dotted ${color.Mint};
  ${media.sm`
    border-bottom: none;
  `}
  a {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    ${media.sm`
      padding: 0px;
      margin: 0px 15px;
      border-bottom: 1px dotted ${color.Mint};
    `}
  }
  h2 {
    font-family: ${fonts.Source};
    margin: 0px;
    color: ${color.white};
    line-height: 3;
    ${media.sm`
    font-size: 1rem;
    `}
  }
  p {
    line-height: 4.5;
    margin: 0px;
    color: ${color.Mint};
    ${media.sm`
      font-size: 0.7rem;
      color: ${color.Mint};
    `}
  }
  &:last-child {
    border-bottom: none;
  }
`

export const BlogLayout = styled.div`
  p,
  h2 {
    font-family: ${fonts.Source};
  }
`
