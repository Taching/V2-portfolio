import React from "react"
import PropTypes from "prop-types"
import { Parallax } from "react-scroll-parallax"
import { HeroStyle, Title, Sub, Name, Social, Avatar } from "./style.js"

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node
  const image1 = require("../../content/assets/image1.jpeg")
  return (
    <Parallax y={[-40, 40]} tagOuter="figure">
      <img src={image1}></img>
      <HeroStyle>
        <Name>{frontmatter.name}</Name>
        <Title>{frontmatter.title}</Title>
        <Sub>{frontmatter.sub}</Sub>
        <Social>
          <div icon="check-square"></div>
        </Social>
      </HeroStyle>
    </Parallax>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
