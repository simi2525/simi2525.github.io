import styled from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledHomeContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.sm};

  ${media.desktop`
       margin-top: 0;   
  `};
`;
