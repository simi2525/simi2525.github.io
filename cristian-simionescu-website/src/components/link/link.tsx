import { StyledLink } from './styled';

import { LinkProps } from '.';

/**
 * Links are accessible elements used primarily for navigation.
 *
 * It integrates well with React Router library.
 *
 *
 * ```javascript
 * import { Link } from '';
 *
 * <Link as={ReactRouterLink} to="/home">Home</Link>
 * ```
 *
 */
export function Link(props: LinkProps) {
  const { as, isExternal, children, href, ...rest } = props;

  return (
    <StyledLink as={as} href={href} {...(isExternal && { target: '_blank' })} {...rest}>
      {children}
    </StyledLink>
  );
}

export default Link;
