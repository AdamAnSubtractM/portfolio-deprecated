import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Head from '../components/Head';
import { useThemeKey } from '../helpers/hooks';
import { sizes, theme } from '../helpers/theme';
import { StyledFlexContainer, StyledPageWrapper } from '../styles/LayoutStyles';

const StyledPage = styled.div<ThemeProps>`
  .content {
    @media all and (min-width: ${sizes.sm}px) {
      width: 46%;
      margin-right: 2%;
    }
  }
  .button__wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
  }
`;

export default function UsesPage() {
  const themeKey = useThemeKey();
  return (
    <StyledPageWrapper
      background={
        themeKey === 'lightMode'
          ? `${theme[
              themeKey
            ].background.main()} url('adam-knee-geometry-light.png') 5% repeat`
          : `${theme[
              themeKey
            ].background.main()} url('adam-knee-geometry-dark.png') 5% repeat`
      }
    >
      <StyledPage themeKey={themeKey}>
        <Head title={`Uses`} />
        <h1>/Uses</h1>
        <StyledFlexContainer breakpoint={`sm`}>
          <article className={`content`}>
            <h2>The tech I'm currently using</h2>
            <p>text will go here</p>
          </article>
          <article className={`content`}>
            <h2>The tools I'm currently using</h2>
            <p>text will go here</p>
          </article>
          <div className={`button__wrap`}>
            <Button
              buttonStyle={`primary`}
              to={`https://uses.tech/`}
              title={`Click to view a curated list of what other developers are using.`}
              isInternalLink={false}
              openInNewTab={true}
            >
              View what other devs use &#8594;
            </Button>
          </div>
        </StyledFlexContainer>
      </StyledPage>
    </StyledPageWrapper>
  );
}
