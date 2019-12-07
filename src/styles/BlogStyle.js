import styled from "styled-components"
import { media } from "@utils"
import { color } from "@color"

//Blog list styles
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
    font-family: auto;
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
//blog template styles
export const CoverContainer = styled.div`
  img {
    position: absolute;
    height: 500px;
    left: 0;
    width: 100%;
    filter: brightness(0.7);
    ${media.sm`
      height: 250px;
    `}
  }
`
export const Contents = styled.div`
  margin-top: 550px;
  ${media.md`
    padding: 0 4.5rem;
  `}
  ${media.sm`
    padding: 0 1.5rem;
    margin-top: 280px;
  `}
  h4 {
    text-align: center;
    color: white;
    margin-bottom: 10px;
    font-size: 0.8rem;
    letter-spacing: 5px;
  }
  h1 {
    font-family: auto;
    color: ${color.white};
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    text-align: center;
    ${media.sm`
      font-size: 1.5rem;
    `}
    &:after {
      content: " ";
      width: 100px;
      color: ${color.MossGreen};
      position: absolute;
      height: 1px;
      bottom: -20px;
      border-bottom: 1px solid;
    }
  }
  p {
    color: white;
    line-height: 1.8;
    font-family: sans-serif;
    font-size: 1.3rem;
    letter-spacing: 1px;
    font-weight: lighter;
    ${media.sm`
      font-size: 1rem;
      font-weight: lighter;
    `}
  }
  code {
    color: red;
    &:before,
    &:after {
      color: red;
    }
  }
`
