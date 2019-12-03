import styled from "styled-components"
import { media } from "@utils"

export const MobileNavStyled = styled.div`
  display: none;
  ${media.md`
    display: block;
  `}
`
