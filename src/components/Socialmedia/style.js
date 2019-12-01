import styled from "styled-components"
import { media, color } from "../../styles/Utils"

export const SocialMediaContainer = styled.ul`
  position: fixed;
  right: 70px;
  display: flex;
  flex-direction: column;
  bottom: 50px;
  list-style: none;
  margin: 0px;
  ${media.sm`
    margin: 0;
    width: 100%;
    justify-content: space-evenly;
  `}
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 70px;
    margin: 0 auto;
    background-color: ${color.MossGreen};
    ${media.sm`
        display: none;
    `}
  }
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
    margin-bottom: 20px;
  `}
`
