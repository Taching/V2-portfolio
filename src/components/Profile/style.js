import styled from "styled-components"
import Img from "gatsby-image"

export const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`
export const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: red;
    font-size: 12px;
    line-height: 12px;
  }
`
export const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
`
export const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
`
