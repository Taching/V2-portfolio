import React from "react"
import Facebook from "../../Icons/Facebook"
import Instagram from "../../Icons/Instagram.js"
import Github from "../../Icons/Github.js"
import Linkedin from "../../Icons/Linkedin.js"

import { SocialMediaContainer, MediaItem } from "./style"

const Socialmedia = () => {
  return (
    <SocialMediaContainer>
      <MediaItem>
        <a href="https://www.facebook.com/tachingers">
          <Facebook width="25px" height="25px"></Facebook>
        </a>
      </MediaItem>
      <MediaItem>
        <a href="https://www.instagram.com/tachingers">
          <Instagram width="25px" height="25px"></Instagram>
        </a>
      </MediaItem>
      <MediaItem>
        <a href="https://github.com/Taching">
          <Github width="25px" height="25px"></Github>
        </a>
      </MediaItem>
      <MediaItem>
        <a href="https://www.linkedin.com/in/takatoshi-wada-42b833107/">
          <Linkedin width="25px" height="25px"></Linkedin>
        </a>
      </MediaItem>
    </SocialMediaContainer>
  )
}

export default Socialmedia
