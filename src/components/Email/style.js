import styled from "styled-components"
import { media } from "@utils"
import { color } from "@color"

export const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 50px;
  left: 1rem;
  div {
    width: 100%;
    margin: 0 auto;
  }
  ${media.sm`
    display: none;
  `}
`
export const EmailLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 70px;
    margin: 0 auto;
    background-color: ${color.MossGreen};
  }
`
export const EmailLink = styled.a`
  letter-spacing: 1px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
  color: ${color.MossGreen};
`
