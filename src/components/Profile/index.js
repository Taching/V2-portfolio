import React, { Component } from "react"
import PropTypes from "prop-types"
import { SkillsContainer, PicContainer, Avatar, Skill } from "./style"

class Profile extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  render() {
    const { data } = this.props
    const { frontmatter } = data[0].node
    const { title, skills, avatar } = frontmatter
    // console.log(data[0].node.frontmatter.avatar)
    return (
      <div>
        <h1>{title}</h1>
        <SkillsContainer>
          {/* {skills.map((skill, i) => (
            <Skill key={i}>{skill}</Skill>
          ))} */}
        </SkillsContainer>
        <PicContainer>
          <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
        </PicContainer>
      </div>
    )
  }
}

export default Profile
