import React, { Component } from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: red;
    font-size: 12px;
    line-height: 12px;
  }
`
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
`
const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
`
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
          {skills.map((skill, i) => (
            <Skill key={i}>{skill}</Skill>
          ))}
        </SkillsContainer>
        <PicContainer>
          <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
        </PicContainer>
      </div>
    )
  }
}

export default Profile
