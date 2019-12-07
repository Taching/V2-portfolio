import styled from "styled-components"
import { color } from "@color"
import { media } from "@utils"
export const StyledBurger = styled.button`
  position: fixed;
  top: 3rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999999;
  ${media.lg`
    right: 3rem;
  `}
  ${media.sm`
    top: 1.5rem;
    right: 1.5rem;
  `}
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? color.MossGreen : color.white)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      width: 1.7rem;
      height: 0.17rem;
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "2rem" : "1.3rem")};
    }
  }
`
