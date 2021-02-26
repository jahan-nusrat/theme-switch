import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body{
    background: ${(props) => {
      console.log(props);
      return props.theme.colors.background_color
    }};
    color : ${(props) => props.theme.colors.text_color};
    font-family: ${(props) => props.theme.font};
    transition : all 0.4s linear;
  }

  a{
    color : ${(props) => props.theme.colors.link.text_color};
    cursor: pointer;
  }

  button {
    font-size: 14px;
    border-radius: 5px;
    padding : 0.8rem 1rem;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${(props) => props.theme.font};
  }

  button.btn{
    background: ${(props) => props.theme.colors.button.background_color};
    color: ${(props) => props.theme.colors.button.text_color};
  }
`