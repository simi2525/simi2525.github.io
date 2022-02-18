import {
  css,
  CSSObject,
  FlattenInterpolation,
  Interpolation,
  ThemedStyledProps,
} from 'styled-components';

import { theme } from '.';

export type MOBILE = 'mobile';
export type MOBILE_LARGE = 'mobileLarge';
export type TABLET = 'tablet';
export type DESKTOP = 'desktop';
export type DESKTOP_LARGE = 'desktopLarge';

export type BreakpointsKeys = MOBILE | MOBILE_LARGE | TABLET | DESKTOP | DESKTOP_LARGE;

export type Breakpoints = {
  [key in BreakpointsKeys]: number;
};

export type MediaFactoryResult = (
  first: TemplateStringsArray | CSSObject,
  ...interpolations: Array<Interpolation<ThemedStyledProps<any, any>>>
) => FlattenInterpolation<ThemedStyledProps<any, any>>;

export type MediaQueriesObjectMap = {
  [key in BreakpointsKeys]: MediaFactoryResult;
};

const mediaFactory =
  (min: BreakpointsKeys): MediaFactoryResult =>
  (...arg) =>
    css`
      @media ${`(min-width: ${theme.breakpoints[min]}px)`} {
        ${css(...arg)}
      }
    `;

const mobile = mediaFactory('mobile');
const mobileLarge = mediaFactory('mobileLarge');
const tablet = mediaFactory('tablet');
const desktop = mediaFactory('desktop');
const desktopLarge = mediaFactory('desktopLarge');

export const media: MediaQueriesObjectMap = {
  mobile,
  mobileLarge,
  tablet,
  desktop,
  desktopLarge,
};
