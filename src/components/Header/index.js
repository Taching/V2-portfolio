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
          {/* <NavItemRight>
            <Link activeClassName="active" to="/about">
              About
            </Link>
          </NavItemRight> */}
          <NavItemRight>
            <Link activeClassName="active" partiallyActive={true} to="/blog">
              Blog
            </Link>
          </NavItemRight>
          <NavItemRight>
            <a href="https://drive.google.com/file/d/10ShW274XY_d-4COINSG5ys3rngPtxBgO/view?usp=sharing">Resume</a>
          </NavItemRight>
        </NavLinks>
      </Navbar>
    </NavContainer>
  )
}

export default Header
