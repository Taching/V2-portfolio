import styled from "styled-components"
import { color } from "../../styles/Utils"
export const FooterStyle = styled.div`
  height: 50px;
  background-color: ${color.Gray6};
  display: flex;
  justify-content: center;
  padding: 15px;
  p {
    margin-right: 5px;
    color: ${color.white};
  }
  a {
    color: ${color.Mint};
  }
`
