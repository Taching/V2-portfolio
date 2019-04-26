import React, { Component } from "react"
import Header from "../Header"
import Email from "../Email"
import { LayoutStyle } from "./style"
import GlobalStyle from "../../styles/GlobalStyle"

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <LayoutStyle>
        <Header />
        <GlobalStyle />
        {children}
        <Email />
      </LayoutStyle>
    )
  }
}

export default Layout
