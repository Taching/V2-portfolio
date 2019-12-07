import styled from "styled-components"
import { media } from "@utils"
import { color } from "@color"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${color.MossGreen};
  height: 100vh;
  width: 20vw;
  text-align: left;
  padding: 2rem;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  clip-path: polygon(0 0, 100% 0, 65% 100%, 0% 100%);
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  ${media.md`
    width: 30vw;
  `}
  ${media.sm`
    width: 78vw;
  `}
`
export const StyledLink = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  padding: 2rem 0;
  color: ${color.Black};
  text-decoration: none;
  transition: color 0.5s linear;
  .active {
    color: white;
    background-color: ${color.Black};
  }
  ${media.sm`
        font-size: 1.5rem;
        padding: 1rem 0;
        margin-bottom: 1rem
    `}
  &:hover {
    color: ${color.Mossgreen};
  }
  a {
    text-decoration: none;
    color: ${color.Black};
  }
`
