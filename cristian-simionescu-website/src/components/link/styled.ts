import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.text};
  text-decoration: none;
  width: auto;
  height: auto;
`;
