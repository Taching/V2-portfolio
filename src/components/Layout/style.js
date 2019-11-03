import styled from "styled-components"
import { media, color, fonts } from "../../styles/Utils"

export const LayoutStyle = styled.div`
  margin: 8rem auto 5rem;
  max-width: 50rem;
  color: ${color.Gray6};
  font-family: ${fonts.Source};
  width: calc(100% - 8.25rem * 2);
  margin: 11rem auto 5rem;
    ${media.lg`
      margin: 8rem auto 3rem;
      width: calc(100% - 11rem * 2);
    `}

    ${media.md`
      width: 100%;
      margin: 4rem auto 0;
      padding: 0 3rem 6rem;
    `}

    ${media.sm`
      margin: 2rem auto 0;
      padding: 0 2rem 6rem;
    `}
`
export const ReactFragment = styled.div`
  position: relative;
`
