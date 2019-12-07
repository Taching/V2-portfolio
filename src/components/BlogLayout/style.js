import styled from "styled-components"
import { media, fonts } from "@utils"
import { color } from "@color"
export const LayoutStyle = styled.div`
  margin: 0rem auto 5rem;
  max-width: 50rem;
  color: ${color.Gray6};
  font-family: ${fonts.Source};
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  ${media.md`
      width: 100%;
    `}
  ${media.sm`
    width: 100%;
    `}
`
export const ReactFragment = styled.div`
  position: relative;
`
export const MobileNavStyled = styled.div`
  display: block;
`
