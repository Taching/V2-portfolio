import React from "react"
import { Link } from "gatsby"

import { NavContainer, Navbar, NavLinks, NavItemRight } from "./style"
const Header = () => {
  return (
    <NavContainer>
      <Navbar>
        {/* LEFT MENU */}
        <NavLinks></NavLinks>
        {/* RIGHT MENU */}
        <NavLinks>
          <NavItemRight>
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </NavItemRight>
          <NavItemRight>
            <Link activeClassName="active" to="/about">
              About
            </Link>
          </NavItemRight>
          <NavItemRight>
            <Link to="/blog">Blog</Link>
          </NavItemRight>
          <NavItemRight>
            <Link to="/blog">Resume</Link>
          </NavItemRight>
        </NavLinks>
      </Navbar>
    </NavContainer>
  )
}

export default Header
