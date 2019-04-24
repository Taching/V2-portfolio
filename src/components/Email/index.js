import React, { Component } from "react"
import { EmailContainer, EmailLinkWrapper, EmailLink } from "./style.js"

class Email extends Component {
  render() {
    const email = "fueledbytaching@gmail.com"
    return (
      <EmailContainer>
        <EmailLinkWrapper>
          <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
        </EmailLinkWrapper>
      </EmailContainer>
    )
  }
}

export default Email
