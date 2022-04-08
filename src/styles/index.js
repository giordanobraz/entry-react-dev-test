import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --c-primary: #5ECE7B;
    --c-text: #1D1F22;
    --c-black: #1D1F22;
    --c-dark-grey: #3e3e3e;
    --c-grey: #8D8F9A;    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font: 93.75%;
    }

    @media (max-width: 720px) {
      font: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }
`;
