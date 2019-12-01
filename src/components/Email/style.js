import styled from "styled-components"
import { media, color } from "../../styles/Utils"

export const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 6.3%;
  left: 1rem;
  div {
    width: 100%;
    margin: 0 auto;
  }
  ${media.md`
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
    height: 50px;
    margin: 0 auto;
    background-color: ${color.Mint};
  }
`
export const EmailLink = styled.a`
  letter-spacing: 1px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
  color: ${color.Mint};
`
