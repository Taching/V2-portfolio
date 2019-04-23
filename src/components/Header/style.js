import styled from "styled-components"

export const NavContainer = styled.header`
  top: 0;
  padding: 0px 50px;
  background-color: red;
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
`
export const Navbar = styled.nav`
  position: relative;
  width: 100%;
  color: blue;
  counter-reset: item 0;
  z-index: 12;
`
export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`
export const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: 10px;
  counter-increment: item 1;
  &:before {
    content: "0" counter(item) ".";
    text-align: right;
    color: green;
    font-size: 10px;
  }
`
