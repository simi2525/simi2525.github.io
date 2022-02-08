import { DefaultTheme, createGlobalStyle } from "styled-components";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${fonts};
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
`;

const Theme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: "cyan",
    secondary: "magenta",
  },
};

export { Theme, GlobalStyle };
