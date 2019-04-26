import styled from "styled-components"
import { color, fonts } from "@utils"
export const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`

export const BlogTitle = styled.div`
  font-family: sans-serif;
  border-bottom: 1px dotted ${color.salmon};
  a {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
  }
  h2,
  p {
    font-family: ${fonts.Roboto};
    margin: 0px;
    color: ${color.white};
  }
  p {
    line-height: 2;
  }
  &:last-child {
    border-bottom: none;
  }
`

export const BlogLayout = styled.div`
  p,
  h2 {
    font-family: ${fonts.roboto};
  }
`
