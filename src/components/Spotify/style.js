import styled from "styled-components"
import { media } from "@utils"
import { color } from "@color"

export const SpotifyStyle = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 200px;
`
export const Player = styled.div`
  display: flex;
  width: 100%;
  p {
    color: #f0e68c;
  }
  ul {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    span {
      color: ${color.white};
      margin-left: 10px;
    }
    a {
      color: ${color.MossGreen};
    }
    h4 {
      font-weight: 800;
      color: ${color.white};
    }
  }
`
