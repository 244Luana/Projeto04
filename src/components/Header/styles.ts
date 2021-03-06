import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
  display: flex;
  border: 0.5rem solid ${colors.black};
  background-color: ${colors.beige};
  align-items: center;
  text{
    justify-content: center;
    text-align: center;
  }
  picture {
      img{
        height: 100px;
        border: 0;
        margin: 5px;      
      }
  }

`