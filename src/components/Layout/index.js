import React, { Component } from "react"
import Header from "../Header"
import Email from "../Email"
import { LayoutStyle, ReactFragment } from "./style"
import GlobalStyle from "../../styles/GlobalStyle"
import Footer from "../Footer"
class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <ReactFragment>
        <LayoutStyle>
          <Header />
          <GlobalStyle />
          {children}
          <Email />
        </LayoutStyle>
        <Footer />
      </ReactFragment>
    )
  }
}

export default Layout
