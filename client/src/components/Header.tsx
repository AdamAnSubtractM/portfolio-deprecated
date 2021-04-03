import React from 'react';
import styled from 'styled-components';
import GithubLink from '../components/GithubLink';
import Logo from '../components/Logo';
import MainSiteNavigation from '../components/MainSiteNavigation';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useThemeKey } from '../helpers/hooks';
import { colors, sizes, layers, theme } from '../helpers/theme';
import { StyledFlexContainer } from '../styles/LayoutStyles';

const StyledHeader = styled(StyledFlexContainer)<ThemeProps>`
  padding: 1rem;
  box-shadow: 0px 3px 15px ${colors.primaryDark(0.1)};
  background-color: ${({ themeKey }) => theme[themeKey].background.main()};
  z-index: ${layers.layer1};
`;

const StyledLogoWrap = styled.div`
  display: flex;
  width: 32%;
  transition: width 0.3s ease-in-out;
  @media all and (min-width: ${sizes.xs}px) {
    width: 58%;
  }
  @media all and (min-width: ${sizes.sm}px) {
    width: 74%;
  }
  @media all and (min-width: ${sizes.md}px) {
    width: 80%;
  }
  @media all and (min-width: ${sizes.lg}px) {
    width: initial;
  }
  .logo {
    height: fit-content;
    max-height: 45px;
    @media all and (min-width: ${sizes.xs}px) {
      max-height: 60px;
    }
  }
`;

export default function Header() {
  const themeKey = useThemeKey();
  return (
    <StyledHeader as={`header`} themeKey={themeKey} preventMobileStack={true}>
      <StyledLogoWrap>
        <Logo className={`logo`} />
      </StyledLogoWrap>
      <MainSiteNavigation />
      <StyledFlexContainer minWidth={`10rem`} preventMobileStack={true}>
        <GithubLink />
        <ThemeSwitcher id={`main-nav`} />
      </StyledFlexContainer>
    </StyledHeader>
  );
}
