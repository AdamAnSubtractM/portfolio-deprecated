import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Head from '../components/Head';
import { useThemeKey } from '../helpers/hooks';
import { theme, sizes } from '../helpers/theme';
import { StyledGridContainer, StyledPageWrapper } from '../styles/LayoutStyles';

const StyledPage = styled.div<ThemeProps>`
  h1 {
    margin-bottom: 3rem;
  }
`;

const StyledGrid = styled(StyledGridContainer)`
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  @media all and (min-width: ${sizes.xs}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (min-width: ${sizes.sm}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (min-width: ${sizes.md}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function PortfolioPage() {
  const themeKey = useThemeKey();
  return (
    <StyledPageWrapper
      background={`url('${
        themeKey === 'lightMode' ? 'stars-bg-alt.svg' : 'stars-bg.svg'
      }') center/50% repeat`}
    >
      <StyledPage themeKey={themeKey}>
        <Head title={`Portfolio`} />
        <h1>Portfolio</h1>
        <StyledGrid>
          <Card maxWidth={`32rem`}>test</Card>
          <Card maxWidth={`32rem`}>test</Card>
          <Card maxWidth={`32rem`}>test</Card>
          <Card maxWidth={`32rem`}>test</Card>
          <Card maxWidth={`32rem`}>test</Card>
          <Card maxWidth={`32rem`}>test</Card>
          <Card maxWidth={`32rem`}>test</Card>
          <Card maxWidth={`32rem`}>test</Card>
        </StyledGrid>
      </StyledPage>
    </StyledPageWrapper>
  );
}
