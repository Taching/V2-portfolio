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
    const image1 = require("../../content/assets/image1.jpeg")
    const image2 = require("../../content/assets/image2.jpeg")
    const image3 = require("../../content/assets/image3.jpeg")
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
            onMouseOver={() => {
              this.setState({
                hover: !this.state.hover,
                alt: "AgogeSystem",
                img: image1,
              })
            }}
          >
            <MoveLeft>
              <a href="foriio.com">01. Agoge System</a>
              <p>[ React, React-Router, Node.JS, Stripe API, Sendgrid API ]</p>
            </MoveLeft>
          </Projects>
          <Projects
            onMouseOver={() => {
              this.setState({
                hover: !this.state.hover,
                alt: "Foriio",
                img: image2,
              })
            }}
          >
            <MoveLeft>
              <a href="foriio.com">02. Foriio</a>
              <p>[ React, Next.JS, Styled-Components, Ruby on Rails ]</p>
            </MoveLeft>
          </Projects>
          <Projects
            onMouseOver={() => {
              this.setState({
                hover: !this.state.hover,
                alt: "FreewillFreespace",
                img: image3,
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
