import React, { Component } from "react"
import {
  ProjectContainer,
  ProjectList,
  Projects,
  MoveLeft,
  BgText,
  Git,
} from "./style"
import { CSSTransition } from "react-transition-group"
import "./animation.css"
class Project extends Component {
  state = {
    alt: "",
    img: "",
    hover: false,
  }
  render() {
    const image1 = require("../../content/assets/agogesystem.jpg")
    const image2 = require("../../content/assets/foriio.jpg")
    const image3 = require("../../content/assets/FWFS.jpg")
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
        <BgText />
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
              <a href="blog/agogesystem">01. Agoge System</a>
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
              <a href="blog/foriio">02. Foriio</a>
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
              <a href="blog/freewillfreespace">03. FWFS</a>
              <p>[ Vue.JS, Nuxt.JS, Django ]</p>
            </MoveLeft>
          </Projects>
        </ProjectList>
        <Git>
          <a href="https://github.com/Taching">Github Repo: @Taching</a>
        </Git>
      </ProjectContainer>
    )
  }
}
export default Project
