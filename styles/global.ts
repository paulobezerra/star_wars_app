import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --gray-500: #9F9999
  }


  @media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
  }

  @media (max-width: 360px) {
    html {
        font-size: 81.25%;
    }
  }

  html, body {
      min-height: 100%;
  }

  body {
    background-image: url("/body_bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Gothic A1', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
