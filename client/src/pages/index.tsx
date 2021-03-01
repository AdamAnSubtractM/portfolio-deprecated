import React from 'react';
import styled from 'styled-components';
import A from '../components/AnchorTag';
import AstronautManFishing from '../components/AstronautManFishing';
import Button from '../components/Button';
import Head from '../components/Head';
import { useThemeKey } from '../helpers/hooks';
import { sizes } from '../helpers/theme';
import { StyledFlexContainer, StyledPageWrapper } from '../styles/LayoutStyles';

const StyledPage = styled.div`
  h1 {
    font-size: 2.65rem;
    @media all and (min-width: ${sizes.xs}px) {
      font-size: 4.25rem;
    }
    @media all and (min-width: ${sizes.sm}px) {
      font-size: 7.25rem;
    }
    @media all and (min-width: ${sizes.md}px) {
      font-size: 5.4rem;
    }
    @media all and (min-width: ${sizes.lg}px) {
      font-size: 7rem;
    }
    @media all and (min-width: ${sizes.xl}px) {
      font-size: 8.25rem;
    }
    span {
      display: block;
    }
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    @media all and (min-width: ${sizes.xs}px) {
      font-size: 2.45rem;
    }
    @media all and (min-width: ${sizes.sm}px) {
      font-size: 3.75rem;
    }
    @media all and (min-width: ${sizes.md}px) {
      font-size: 2.6rem;
    }
    @media all and (min-width: ${sizes.lg}px) {
      font-size: 4rem;
    }
    @media all and (min-width: ${sizes.xl}px) {
      font-size: 4.6rem;
    }
  }
  .content {
    @media all and (min-width: ${sizes.md}px) {
      width: 60%;
    }
    .button-wrap {
      @media all and (min-width: ${sizes.md}px) {
        justify-content: flex-start;
      }
      display: flex;
      justify-content: center;
    }
  }
  .hero-image {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    @media all and (min-width: ${sizes.md}px) {
      padding: 0;
      justify-content: flex-end;
      width: 40%;
    }
    img,
    svg {
      max-height: 18rem;
      min-width: 250px;
      width: 100%;
      display: block;
      @media all and (min-width: ${sizes.xs}px) {
        min-width: 400px;
        max-height: 30rem;
      }
      @media all and (min-width: ${sizes.sm}px) {
        min-width: 500px;
        max-height: 40rem;
      }
      @media all and (min-width: ${sizes.md}px) {
        max-height: 50rem;
        min-width: initial;
        width: initial;
      }
    }
  }
`;

export default function HomePage() {
  const themeKey = useThemeKey();

  return (
    <StyledPageWrapper
      background={`url('${
        themeKey === 'lightMode' ? 'stars-bg-alt.svg' : 'stars-bg.svg'
      }') center/50% repeat`}
      sectionSize={`large`}
    >
      <StyledPage>
        <Head title={`Home`} />
        <StyledFlexContainer>
          <div className={`content`}>
            <h1>
              Hey, there. <span>My name is Adam.</span>
            </h1>
            <h2>
              I'm a web developer who builds{' '}
              <A to={`/portfolio`}>cool&nbsp;stuff</A>that is out of this world.
            </h2>
            <div className={`button-wrap`}>
              <Button
                buttonStyle={`primary`}
                to={`/portfolio`}
                title={`Click to view Adam Knee's Portfolio.`}
              >
                View Portfolio &#8594;
              </Button>
            </div>
          </div>
          <div className={`hero-image`}>
            <AstronautManFishing />
          </div>
        </StyledFlexContainer>
      </StyledPage>
    </StyledPageWrapper>
  );
}
