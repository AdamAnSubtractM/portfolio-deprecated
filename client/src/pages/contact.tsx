import React from 'react';
import styled from 'styled-components';
import AstronautManRidingRocket from '../components/AstronautManRidingRocket';
import Card from '../components/Card';
import Head from '../components/Head';
import { StyledFlexContainer, StyledPageWrapper } from '../styles/LayoutStyles';
import { theme, sizes } from '../helpers/theme';
import A from '../components/AnchorTag';

import { useThemeKey } from '../helpers/hooks';

const StyledPage = styled.div<ThemeProps>`
  .content {
    @media all and (min-width: ${sizes.md}px) {
      width: 55%;
    }
    svg {
      max-height: 40rem;
    }
  }
  form {
    h2 {
      margin-top: 0;
      padding-bottom: 1rem;
      border-bottom: 1px solid ${({ themeKey }) => theme[themeKey].text()};
    }
  }
`;

export default function ContactPage() {
  const themeKey = useThemeKey();
  return (
    <StyledPageWrapper
      background={
        themeKey === 'lightMode'
          ? `${theme[
              themeKey
            ].background()} url('stars-bg-alt.svg') center/50% repeat`
          : `${theme[
              themeKey
            ].background()} url('stars-bg.svg') center/50% repeat`
      }
    >
      <StyledPage themeKey={themeKey}>
        <Head title={`Contact`} />
        <h1>Contact</h1>
        <StyledFlexContainer>
          <div className={`content`}>
            <p>
              Thanks for stopping by my site. Feel free to use the contact form
              to send me an email. You can also use the Github and Twitter icon
              to check out my{' '}
              <A
                to={`https://github.com/AdamAnSubtractM`}
                isInternalLink={false}
                openInNewTab={true}
                title={`Click to view my Github.`}
              >
                Github
              </A>{' '}
              and{' '}
              <A
                to={`https://twitter.com/AdamAnSubtractM`}
                isInternalLink={false}
                openInNewTab={true}
                title={`Click to view my Twitter.`}
              >
                Twitter
              </A>{' '}
              respectively.
            </p>
            <AstronautManRidingRocket />
          </div>
          <Card>
            <form>
              <h2>Drop me a line</h2>
            </form>
          </Card>
        </StyledFlexContainer>
      </StyledPage>
    </StyledPageWrapper>
  );
}
