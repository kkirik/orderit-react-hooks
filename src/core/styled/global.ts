import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Peenu";
    src: url("../public/fonts/Peenu.ttf");
  }
  @font-face {
    font-family: "Lora";
    src: url("../public/fonts/Lora-Bold.ttf");
    font-weight: bold;
  }
  @font-face {
    font-family: "Lora";
    src: url("../public/fonts/Lora-BoldItalic.ttf");
    font-style: italic;
    font-weight: bold;
  }
  @font-face {
    font-family: "Lora";
    src: url("../public/fonts/Lora-Italic.ttf");
    font-style: italic;
  }
  @font-face {
    font-family: "Lora";
    src: url("../public/fonts/Lora-Regular.ttf");
    font-weight: normal;
  }

  body {
    background: #fafafa;
  }

  body, input {
    font-family: "Peenu";
  }

  body, ul {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: none;
  }
`;
