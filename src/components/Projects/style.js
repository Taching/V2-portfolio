import styled from "styled-components"
import { color, media } from "../../styles/Utils"

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;
  transition: all 0.5s ease;
  img {
    height: 500px;
    width: 400px;
    position: absolute;
    left: 0px;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    ${media.sm`
      display: none;
    `}
  }
`
export const BgText = styled.span`
  color: ${color.Mint};
  letter-spacing: 10px;
  position: absolute;
  letter-spacing: -6px;
  position: absolute;
  font-size: 4rem;
  opacity: 0.6;
  top: -75px;
  left: -100px;
  :before {
    content: "Projects.js";
  }
  ${media.lg`
    font-size: 4rem;
  `}
  ${media.md`
    display: block;
    top: 0;
    left: 0;
    font-size: 1.8rem;
    letter-spacing: 0px;
    margin-left: 20px;
  `}
`
export const ProjectList = styled.ul`
  z-index: 999;
  height: 400px;
  width: 450px;
  margin-left: 300px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${media.lg`
    margin-left: 100px;
  `}
  ${media.md`
    margin-left: 0px;
    width: auto;
  `}
`
export const Projects = styled.li`
  color: ${color.white};
  border-bottom: 1px solid ${color.Mint};
  padding: 15px 0px;
  width: 500px;
  ${media.md`
    width: auto;
  `}
  ${media.sm`
    padding: 0px 20px;
    border-bottom: none;
  `}
  :last-child {
    border-bottom: none;
  }
  a {
    color: ${color.white};
    text-decoration: none;
    font-size: 3rem;
    width: auto;
    ${media.md`
      font-size: 1.8rem;
    `}
  }
  a:hover {
    background-color: ${color.MossGreen};
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
    ${media.md`
      transition: none;
    `}
  }
  p {
    margin-top: 10px;
    color: ${color.MossGreen};
    background-color: ${color.Black2};
    width: max-content;
    ${media.md`
      width: auto;
    `}
  }
`
export const MoveLeft = styled.div`
  transition: transform 0.7s linear;
  :hover {
    opacity: 1;
    transform: translate(25px, 0px);
    ${media.md`
      transform: none;
    `}
  }
  ${media.md`
     transition: none;
  `}
`
