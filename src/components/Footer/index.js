import React from "react"
import { FooterStyle } from "./style"

const Footer = () => {
  return (
    <FooterStyle>
      <p>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        using
      </p>
      <a href="https://www.gatsbyjs.org/"> GatsbyJS</a>
    </FooterStyle>
  )
}

export default Footer
