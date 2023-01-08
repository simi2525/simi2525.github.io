import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme as AppTheme, GlobalStyle } from '../src/theme';
import theme from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Intro', 'Design System', 'Components'],
    },
  },
  docs: {
    theme,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'purple',
        value: '#000033',
      },
    ],
  },
};

const storybookTheme = { ...theme, ...AppTheme };

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ThemeProvider theme={storybookTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </BrowserRouter>
  ),
];
