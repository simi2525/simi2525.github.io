import styled from 'styled-components';

import { media } from '@/theme/breakpoints';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* margin: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.lg}`}; */

  /* ${media.desktop``}; */
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
  padding: ${({ theme: { spacing } }) => `${spacing.md} ${spacing.lg}`};
  width: 100%;
`;

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    height: 54px;
    width: 168px;
  }
`;

export const Content = styled.main`
  margin: 0;
  padding: 0 100px;
  height: 100%;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
`;

export const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  height: 100vh;
  margin: 0;
  color: #8892b0;
`;

export const StyledH1 = styled.h1`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.accent};
  font-family: 'RobotoMono', sans-serif;
`;

export const StyledH2 = styled.h2`
  font-size: 32px;
  color: #ccd6f6;
  margin: 0;
`;

export const StyledH3 = styled.h3`
  font-size: 32px;
  color: ${({ theme }) => `${theme.colors.primary.text}`};
  margin: ${({ theme }) => `${theme.spacing.xs} 0`};
  opacity: 50%;
  width: 60%;
`;

export const StyledResumeButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  color: ${({ theme }) => theme.colors.primary.accent};
  font-family: 'RobotoMono', sans-serif;
  border: ${({ theme }) => `1px solid ${theme.colors.primary.accent}`};
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;

  :hover {
    background-color: rgba(101, 200, 195, 0.2);
  }
`;
