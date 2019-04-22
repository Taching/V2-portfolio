import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavContainer = styled.header`
  top: 0;
  padding: 0px 50px;
  background-color: red;
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
`
const Navbar = styled.nav`
  position: relative;
  width: 100%;
  color: blue;
  counter-reset: item 0;
  z-index: 12;
`
const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`
const NavListItem = styled.li`
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
const Header = () => {
  return (
    <NavContainer>
      <Navbar>
        <NavLinks>
          <NavListItem>
            <Link to="/">Home</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/about">About</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/blog">Blog</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/contact">Contact</Link>
          </NavListItem>
        </NavLinks>
      </Navbar>
    </NavContainer>
  )
}

export default Header
