import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/images/logo/logo.svg';
import Link from '@/components/Link';

import {
  HomeContainer,
  StyledHeader,
  StyledNavBar,
  StyledLogo,
  Content,
  AboutMeSection,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledResumeButton,
} from './styled';

const Home = () => {
  return (
    <HomeContainer>
      <StyledHeader>
        <StyledNavBar>
          <StyledLogo>
            <Link as={NavLink} to="/" aria-label="Home">
              <Logo />
            </Link>
          </StyledLogo>
        </StyledNavBar>
      </StyledHeader>

      <Content>
        <AboutMeSection>
          <StyledH1>Hi, my name is</StyledH1>
          <StyledH2>Cristian Simionescu.</StyledH2>
          <StyledH3>
            And I am a .NET Software Developer and deep learning Ph.D. Student at the Faculty of
            Computer Science Iasi
          </StyledH3>
          <StyledResumeButton>Resume</StyledResumeButton>
        </AboutMeSection>
      </Content>
    </HomeContainer>
  );
};

export default Home;
