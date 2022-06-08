import { DefaultTheme, createGlobalStyle } from 'styled-components';

import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.colors.primary.background};
  }
`;

const theme: DefaultTheme = {
  colors: {
    primary: {
      background: '#000033',
      accent: '#971C7A',
      text: '#FFFFFF',
    },
    secondary: {
      highlight: '#35055D',
      text: '#999999',
    },
  },
  spacing: {
    xx: '4px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
  },
  fontSize: {
    xx: '12px',
    xs: '16px',
    sm: '18px',
    md: '24px',
    lg: '32px',
    xl: '40px',
  },
  breakpoints: {
    mobile: 320,
    mobileLarge: 480,
    tablet: 768,
    desktop: 992,
    desktopLarge: 1200,
  },
};

export { theme, GlobalStyle };
