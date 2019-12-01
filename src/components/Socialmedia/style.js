import styled from "styled-components"
import { media, color } from "../../styles/Utils"

export const SocialMediaContainer = styled.ul`
  position: fixed;
  right: 70px;
  display: flex;
  flex-direction: column;
  bottom: 50px;
  list-style: none;
  ${media.lg`
    right: 50px;
  `}
  ${media.md`
    right: 30px;
  `}
  ${media.sm`
    position: static;
    flex-direction: row;
    position: absolute;
    left: 0;
  `}
`

export const MediaItem = styled.li`
  text-decoration: none;
  ${media.sm`
    margin-right: 20px;
  `}
`
