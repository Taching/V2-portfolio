import React from "react"
import PropTypes from "prop-types"
import {
  HeroStyle,
  BgText,
  Bar,
  Sub,
  Text,
  Avatar,
  AvatarContainer,
  HeroLg,
  HeroMobile,
  MobileAvatar,
} from "./style.js"

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node
  const { intro1, intro2, intro3, sub, avatar } = frontmatter
  return (
    <HeroStyle>
      {/* Large Screen */}
      <BgText />
      <HeroLg>
        <AvatarContainer>
          <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
        </AvatarContainer>
        <Text>{intro1}</Text>
        <Text>{intro2}</Text>
        <Text>{intro3}</Text>
        <Bar />
        <Sub>{sub}</Sub>
      </HeroLg>

      {/* MOBILE */}
      <HeroMobile>
        <MobileAvatar>
          <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
        </MobileAvatar>
        <Text>{intro1}</Text>
        <Text>{intro2}</Text>
        <Text>{intro3}</Text>
      </HeroMobile>
    </HeroStyle>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
