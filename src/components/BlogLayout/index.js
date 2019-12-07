import React, { Component } from "react"
import { LayoutStyle, ReactFragment } from "./style"
import GlobalStyle from "@global"

import Blognav from "./Blognav"
import Footer from "@components/Footer"

class BlogLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <ReactFragment>
        <LayoutStyle>
          <Blognav />
          <GlobalStyle />
          {children}
        </LayoutStyle>
        <Footer />
      </ReactFragment>
    )
  }
}

export default BlogLayout
