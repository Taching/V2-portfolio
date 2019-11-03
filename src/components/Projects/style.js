import styled from "styled-components"
import { color } from "../../styles/Utils"

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
    transition: all 0.9s linear;
  }
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
`
export const Projects = styled.li`
  color: ${color.white};
  border-bottom: 1px solid ${color.Mint};
  padding: 15px 0px;
  width: 500px;
  :last-child {
    border-bottom: none;
  }
  a {
    color: ${color.white};
    text-decoration: none;
    font-size: 3rem;
    width: auto;
  }
  a:hover {
    background-color: ${color.MossGreen};
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
  }
  p {
    margin-top: 10px;
    color: ${color.MossGreen};
    background-color: ${color.Black2};
    width: max-content;
  }
`
export const MoveLeft = styled.div`
  transition: transform 0.7s linear;
  :hover {
    opacity: 1;
    transform: translate(25px, 0px);
  }
`
