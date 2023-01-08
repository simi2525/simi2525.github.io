import { ElementType } from 'react';
import { NavLinkProps } from 'react-router-dom';

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'style'>,
    NavLinkProps {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: string;

  /**
   *  An alternative react component to use as the label
   *  instead of the default anchor element.
   */
  as?: ElementType;
}
