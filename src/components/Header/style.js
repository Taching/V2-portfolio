import styled from "styled-components"

export const NavContainer = styled.header`
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5rem;
`
export const Navbar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 7em;
  width: 100%;
  color: blue;
  counter-reset: item 0;
  z-index: 12;
`
export const NavLinks = styled.ul`
  width: 50%;
  max-width: 14rem;
  list-style: none;
  padding: 0px;
  margin: 0px;
  a {
    text-decoration: none;
    color: rgb(148, 152, 158);
  }
`
export const NavItemRight = styled.li`
  margin: 0 10px;
  font-size: 0.7em;
  text-align: right !important;
`
export const NavItemLeft = styled.li`
  margin: 0 10px;
  font-size: 0.7em;
  list-style: none;
`
