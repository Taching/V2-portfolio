import React from "react"
import PropTypes from "prop-types"
import Typist from "react-typist"
import { HeroStyle, Bar, Sub, Name, Avatar, AvatarContainer } from "./style.js"

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node
  const { name, intro1, intro2, intro3, sub, avatar } = frontmatter
  return (
    <HeroStyle>
      <Typist>
        <Typist.Backspace avgTypingDelay={100} delay={1000} />
        <Name>{intro1}</Name>
        <Name>{intro2}</Name>
        <Name>{intro3}</Name>
        <Bar />
        <Sub>{sub}</Sub>
      </Typist>
      <AvatarContainer>
        <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
      </AvatarContainer>
    </HeroStyle>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
