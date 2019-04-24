import React, { Component } from "react"
import Header from "../Header"
import Footer from "../Footer"

import GlobalStyle from "../../styles/GlobalStyle"

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
