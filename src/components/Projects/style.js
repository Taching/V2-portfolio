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
    ${media.md`
      left: 150px;
    `}
    ${media.sm`
      display: none;
    `}
  }
`
export const BgText = styled.span`
  color: ${color.white};
  letter-spacing: 10px;
  position: absolute;
  letter-spacing: -6px;
  position: absolute;
  font-size: 4rem;
  height: 10px;
  top: -75px;
  left: -100px;
  background-color: ${color.MossGreen};
  :before {
    content: "WORKS";
  }
  ${media.lg`
    font-size: 4rem;
  `}
  ${media.md`
    display: block;
    top: 0;
    left: 0;
    font-size: 1.8rem;
    font-weight: 600;
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
    position: relative;
    overflow: hidden;
    ::after {
      height: 100%;
      left: -20%;
      top: 0;
      clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0% 100%);
      transition-duration: 0.6s;
      transform-origin: top left;
      width: 0;
    }
    :hover:after {
      height: 100%;
      width: 120%;
    }
    ::before,
    ::after {
      background: ${color.MossGreen};
      content: "";
      position: absolute;
      z-index: -1;
      ${media.sm`
        background: none;
      `}
    }
    ${media.md`
      font-size: 1.8rem;
    `}
  }
  a,
  a::after {
    -webkit-transition: all 0.8;
    -moz-transition: all 0.8;
    -o-transition: all 0.8;
    transition: all 0.8;
    ${media.sm`
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
    ${media.sm`
      transform: none;
      transition: none;
    `}
  }
  ${media.sm`
     transition: none;
  `}
`
