import React, { Component } from "react"
import { LayoutStyle, ReactFragment } from "./style"
import GlobalStyle from "@global"

import Socialmedia from "@components/Socialmedia"
import Header from "@components/Header"
import Email from "@components/Email"
import MobileNav from "@components/MobileNav"
import Footer from "@components/Footer"
class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <ReactFragment>
        <LayoutStyle>
          <MobileNav />
          <Header />
          <GlobalStyle />
          {children}
          <Email />
          <Socialmedia />
        </LayoutStyle>
        <Footer />
      </ReactFragment>
    )
  }
}

export default Layout
