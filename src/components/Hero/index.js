import React from "react"
import PropTypes from "prop-types"
import { HeroStyle, Title, Sub, Name, Social } from "./style.js"

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node
  return (
    <HeroStyle>
      <Name>{frontmatter.name}</Name>
      <Title>{frontmatter.title}</Title>
      <Sub>{frontmatter.sub}</Sub>
      <Social>
        <div icon="check-square"></div>
      </Social>
    </HeroStyle>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
