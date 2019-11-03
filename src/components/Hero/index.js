import React from "react"
import PropTypes from "prop-types"
import Typist from "react-typist"
import { HeroStyle, Title, Sub, Name } from "./style.js"

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node
  return (
    <HeroStyle>
      <Typist>
        <Name>Hi.. I'm</Name>
        <Typist.Backspace count={8} delay={1000} />
        <Name>taching</Name>
        <Typist.Backspace count={7} avgTypingDelay={100} delay={1000} />
        <Name>{frontmatter.name}</Name>
        <Title>{frontmatter.title}</Title>
        <Sub>{frontmatter.sub}</Sub>
      </Typist>
    </HeroStyle>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
