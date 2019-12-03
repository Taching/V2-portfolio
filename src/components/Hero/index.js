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
  Emoji,
  Likes,
} from "./style.js"

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node
  const {
    intro1,
    intro2,
    intro3,
    sub,
    avatar,
    surf,
    guitar,
    climbing,
    lifting,
  } = frontmatter
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
        <Likes>
          <p>Most of the time I do:</p>
          <Emoji role="img" aria-label="surf">
            {surf}
          </Emoji>
          <Emoji role="img" aria-label="guitar">
            {guitar}
          </Emoji>
          <Emoji role="img" aria-label="climbing">
            {climbing}
          </Emoji>
          <Emoji role="img" aria-label="lifting">
            {lifting}
          </Emoji>
        </Likes>
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
