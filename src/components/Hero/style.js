import styled from "styled-components"
import { color, media } from "../../styles/Utils"
import Img from "gatsby-image"

export const HeroStyle = styled.div`
  height: 500px;
  position: relative;
  ${media.md`
    display: flex;
    justify-content: center;
    height: 350px;
  `}
`
// Large Screens
export const HeroLg = styled.div`
  ${media.md`
    display: none;
  `}
`
export const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(50%) contrast(1);
  ${media.md`
    border-radius: 50%;
    height: 200px;
    width: 200px;
  `}
  ${media.sm`
    border-radius: 50%;
    height: 150px;
    width: 150px;
  `}
`
export const AvatarContainer = styled.div`
  height: 500px;
  width: 410px;
  position: absolute;
  right: 0;
  top: -90px;
  z-index: -1;
  ${media.lg`
    width: 310px;
  `}
`

export const Text = styled.h1`
  color: ${color.white};
  margin-bottom: 13px;
  font-weight: bold;
  font-size: 2rem;
  width: max-content;
  ${media.md`
    margin-bottom: 0px;
    margin: auto;
    text-align: center;
    font-weight: 100;
    font-size: 1.5rem;
  `}
`
export const Title = styled.p`
  color: ${color.white};
  font-size: 1.5rem;
`
export const Sub = styled.span`
  color: ${color.Gray3};
  font-size: 1.3rem;
`
export const Social = styled.ul`
  list-style: none;
`
export const Bar = styled.div`
  width: 200px;
  height: 1px;
  border-bottom: 1px solid ${color.Mint};
  margin-top: 20px;
  margin-bottom: 40px;
`
export const BgText = styled.span`
  color: ${color.Mint};
  letter-spacing: 10px;
  position: absolute;
  letter-spacing: -6px;
  position: absolute;
  font-size: 4rem;
  opacity: 0.6;
  left: -90px;
  top: -85px;
  :before {
    content: "Hero.js";
  }
  ${media.lg`
    font-size: 4rem;
    left: -90px;
  `}
  ${media.md`
    font-size: 1.8rem;
    left: 20px;
    top: 0;
    letter-spacing: 0px;
  `}
`

//Mobile Screens

export const HeroMobile = styled.div`
  display: none;
  ${media.md`
    display: block;
  `}
`
export const MobileAvatar = styled.div`
  z-index: -1;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  ${media.sm`
    margin-top: 50px;
  `}
`
