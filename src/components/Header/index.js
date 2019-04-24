import React from "react"
import { Link } from "gatsby"
import {
  NavContainer,
  Navbar,
  NavLinks,
  NavItemLeft,
  NavItemRight,
} from "./style"
const Header = () => {
  return (
    <NavContainer>
      <Navbar>
        {/* LEFT MENU */}
        <NavLinks>
          <NavItemLeft>
            <Link to="/">Instagram</Link>
          </NavItemLeft>
          <NavItemLeft>
            <Link to="/about">Wantedly</Link>
          </NavItemLeft>
          <NavItemLeft>
            <Link to="/blog">LinkedIn</Link>
          </NavItemLeft>
          <NavItemLeft>
            <Link to="/contact">Github</Link>
          </NavItemLeft>
        </NavLinks>
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
            <Link to="/contact">Contact</Link>
          </NavItemRight>
        </NavLinks>
      </Navbar>
    </NavContainer>
  )
}

export default Header
