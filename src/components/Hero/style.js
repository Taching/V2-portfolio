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
  filter: drop-shadow(16px 16px 0px ${color.MossGreen});
  ${media.md`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    filter: none;
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
  color: ${color.white};
  height: 10px;
  letter-spacing: 10px;
  position: absolute;
  letter-spacing: -6px;
  position: absolute;
  font-size: 4rem;
  background-color: ${color.MossGreen};
  left: -90px;
  top: -85px;
  :before {
    content: "WHO";
  }
  ${media.lg`
    font-size: 4rem;
    left: -90px;
  `}
  ${media.md`
    font-size: 1.8rem;
    font-weight: 600;
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
