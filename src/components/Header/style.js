import styled from "styled-components"
import { getOuterSpace, color, fonts } from "../../styles/Utils"

export const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
  ${getOuterSpace("padding")}
  z-index: 12;
`
export const Navbar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 7em;
  width: 100%;
`
export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
  a {
    font-family: ${fonts.Roboto};
    font-weight: 600;
    font-size: 1rem;
    color: ${color.white};
    z-index: 100;
    pointer-events: all;
  }
`
export const NavItemRight = styled.li`
  font-size: 0.7em;
  text-align: right;
`
export const NavItemLeft = styled.li`
  font-size: 0.7em;
  list-style: none;
`
