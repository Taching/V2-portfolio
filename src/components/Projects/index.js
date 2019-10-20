import React, { Component } from "react"
import { ProjectContainer, ProjectList, Projects } from "./style"

class Project extends Component {
  state = {
    alt: "AgogeSystem",
    img:
      "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80z",
    hover: false,
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }
  render() {
    return (
      <ProjectContainer>
        <img alt={this.state.alt} src={this.state.img} />
        <ProjectList>
          <Projects
            onMouseEnter={() => {
              this.setState({
                alt: "AgogeSystem",
                img:
                  "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80z",
              })
            }}
          >
            <a href="foriio.com">01. Agoge System</a>
            <p>React, React-Router, Node.JS, Stripe API, Sendgrid API</p>
          </Projects>
          <Projects
            onMouseEnter={() => {
              this.setState({
                alt: "Foriio",
                img:
                  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              })
            }}
          >
            <a href="foriio.com">02. Foriio</a>
            <p>React, Next.JS, Styled-Components, Ruby on Rails</p>
          </Projects>
          <Projects
            onMouseEnter={() => {
              this.setState({
                alt: "FreewillFreespace",
                img:
                  "https://images.unsplash.com/photo-1507486990559-1d65aaad9ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
              })
            }}
          >
            <a href="foriio.com">03. Freewill Freespace</a>
            <p>Vue.JS, Nuxt.JS, Django </p>
          </Projects>
        </ProjectList>
      </ProjectContainer>
    )
  }
}
export default Project
