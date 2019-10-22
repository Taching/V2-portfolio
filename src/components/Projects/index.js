import React, { Component } from "react"
import { ProjectContainer, ProjectList, Projects, MoveLeft } from "./style"
import { CSSTransition } from "react-transition-group"
import "./animation.css"
class Project extends Component {
  state = {
    alt: "",
    img: "",
    hover: false,
  }
  render() {
    return (
      <ProjectContainer
        onMouseOut={() => {
          this.setState({
            hover: false,
            alt: "",
            img: "",
          })
        }}
      >
        <CSSTransition
          in={this.state.hover}
          classNames="example"
          timeout={100}
          unmountOnExit
        >
          <img alt={this.state.alt} src={this.state.img} />
        </CSSTransition>
        <ProjectList>
          <Projects
            onMouseEnter={() => {
              this.setState({
                hover: !this.state.hover,
                alt: "AgogeSystem",
                img:
                  "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80z",
              })
            }}
          >
            <MoveLeft>
              <a href="foriio.com">01. Agoge System</a>
              <p>[ React, React-Router, Node.JS, Stripe API, Sendgrid API ]</p>
            </MoveLeft>
          </Projects>
          <Projects
            onMouseEnter={() => {
              this.setState({
                hover: !this.state.hover,
                alt: "Foriio",
                img:
                  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              })
            }}
          >
            <MoveLeft>
              <a href="foriio.com">02. Foriio</a>
              <p>[ React, Next.JS, Styled-Components, Ruby on Rails ]</p>
            </MoveLeft>
          </Projects>
          <Projects
            onMouseEnter={() => {
              this.setState({
                hover: !this.state.hover,
                alt: "FreewillFreespace",
                img:
                  "https://images.unsplash.com/photo-1507486990559-1d65aaad9ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
              })
            }}
          >
            <MoveLeft>
              <a href="foriio.com">03. Freewill Freespace</a>
              <p>[ Vue.JS, Nuxt.JS, Django ]</p>
            </MoveLeft>
          </Projects>
        </ProjectList>
      </ProjectContainer>
    )
  }
}
export default Project
