import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 720px) {
      font-size: 90%;
    }
  }

  body {
    background: #00507a;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: #1b1b1b;
  }

  input,
  select {
    outline: none;
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
