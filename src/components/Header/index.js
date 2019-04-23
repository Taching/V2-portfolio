import React from "react"
import { Link } from "gatsby"
import { NavContainer, Navbar, NavLinks, NavListItem } from "./style"
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
