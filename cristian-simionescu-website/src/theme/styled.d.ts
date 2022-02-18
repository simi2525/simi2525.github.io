import 'styled-components';
import { Breakpoints } from './breakpoints';

declare module 'styled-components' {
  export type SizeKeys = 'xx' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  export type Size = {
    [key in SizeKeys]: string;
  };

  export interface DefaultTheme {
    colors: {
      primary: {
        background: string;
        accent: string;
        text: string;
      };
      secondary: {
        highlight: string;
        text: string;
      };
    };
    spacing: Size;
    fontSize: Size;
    breakpoints: Breakpoints;
  }
}
