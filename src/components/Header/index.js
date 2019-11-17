import React from "react"
import { Link } from "gatsby"
import Facebook from "../../Icons/Facebook"
import Instagram from "../../Icons/Instagram.js"
import Github from "../../Icons/Github.js"
import Linkedin from "../../Icons/Linkedin.js"

import {
  NavContainer,
  Navbar,
  NavLinks,
  NavItemRight,
  NavItemLeft,
  Socialinks,
} from "./style"
const Header = () => {
  return (
    <NavContainer>
      <Socialinks>
        <NavItemLeft>
          <Facebook width="45px" height="45px"></Facebook>
          <a href="#"></a>
        </NavItemLeft>
        <NavItemLeft>
          <Instagram width="45px" height="45px"></Instagram>
          <a href="#"></a>
        </NavItemLeft>
        <NavItemLeft>
          <Github width="45px" height="45px"></Github>
          <a href="#"></a>
        </NavItemLeft>
        <NavItemLeft>
          <Linkedin width="45px" height="45px"></Linkedin>
          <a href="#"></a>
        </NavItemLeft>
      </Socialinks>
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
            <Link to="/contact">Contact</Link>
          </NavItemRight>
        </NavLinks>
      </Navbar>
    </NavContainer>
  )
}

export default Header
