import { css } from "styled-components"

export const color = {
  //Brand
  MossGreen: "#00CC83",
  Mint: "#53E0BD",
  //Grey Scale
  white: "#FFF",
  Gray1: "#EEE",
  Gray2: "#ddd",
  Gray3: "#BBB",
  Gray4: "#888",
  Gray5: "#777",
  Gray6: "#454545",
  Black: "#1f211c",
  Black2: "#000",
}

export const fonts = {
  Source: "'Source Sans Pro', sans-serif",
}

export const spaces = {
  p500: "5rem",
  p400: "4rem",
  p300: "3rem",
  p200: "2rem",
  p100: "1rem",
  p50: ".5rem",
  p25: ".25rem",
}

export const mq = {
  xs: "22em",
  sm: "40em",
  md: "54em",
  lg: "78em",
  xl: "125em",
}

export const media = {
  xs: (...a) => css`
    @media (max-width: ${mq.xs}) {
      ${css(...a)}
    }
  `,
  sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,
  md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,
  lg: (...a) => css`
    @media (max-width: ${mq.lg}) {
      ${css(...a)}
    }
  `,
  xl: (...a) => css`
    @media (max-width: ${mq.xl}) {
      ${css(...a)}
    }
  `,
  hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `,
}

const rule = (d, v) => `${d}: ${v};`

export const getOuterSpace = p =>
  css`
    ${rule(p, spaces.p500)}
    ${media.lg`
      ${rule(p, spaces.p300)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
  `
