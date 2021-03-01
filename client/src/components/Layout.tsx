import 'normalize.css';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useThemeKey } from '../helpers/hooks';
import { theme } from '../helpers/theme';
import GlobalStyles from '../styles/GlobalStyles';

type LayoutProps = {
  children: React.ReactNode;
};

const StyledLayout = styled.section<ThemeProps>`
  min-height: 100vh;
  color: ${({ themeKey }) => theme[themeKey].text()};
  background-color: ${({ themeKey }) => theme[themeKey].backgroundAlt()};
  main {
    display: flex;
    align-items: center;
    padding: 1rem;
    min-height: calc(100vh - 80px);
  }
`;

export default function Layout({ children, ...props }: LayoutProps) {
  const themeKey = useThemeKey();

  return (
    <StyledLayout themeKey={themeKey} {...props}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
}
