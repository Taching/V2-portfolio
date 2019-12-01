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
            <Link to="/">Home</Link>
          </NavItemRight>
          <NavItemRight>
            <Link to="/about">About</Link>
          </NavItemRight>
          <NavItemRight>
            <Link to="/blog">Blog</Link>
          </NavItemRight>
          <NavItemRight>
            <Link>Resume</Link>
          </NavItemRight>
        </NavLinks>
      </Navbar>
    </NavContainer>
  )
}

export default Header
