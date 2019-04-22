import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
const LayoutStyle = styled.div``

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
