import React, { Component } from "react"
import Header from "../Header"
import Footer from "../Footer"
import { LayoutStyle } from "./style"
import GlobalStyle from "../../styles/GlobalStyle"

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <LayoutStyle>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </LayoutStyle>
    )
  }
}

export default Layout
