import React from "react"
import { Link } from "gatsby"
import { StyledMenu, StyledLink } from "./style"
import { bool } from "prop-types"
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink>
        <Link activeClassName="active" to="/">
          Home
        </Link>
      </StyledLink>
      {/* <StyledLink>
        <Link activeClassName="active" to="/about">
          About
        </Link>
      </StyledLink> */}
      <StyledLink>
        <Link to="/blog">Blog</Link>
      </StyledLink>
      <StyledLink>
        <a href="/">Resume</a>
      </StyledLink>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
