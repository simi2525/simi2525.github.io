import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyle } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Intro', 'Colors', 'Components'],
    },
  },
  docs: {
    theme,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
