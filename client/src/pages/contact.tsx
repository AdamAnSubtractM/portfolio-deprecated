import ContactForm from '../components/ContactForm';
import React from 'react';
import styled from 'styled-components';
import A from '../components/AnchorTag';
import AstronautManRidingRocket from '../components/AstronautManRidingRocket';
import Card from '../components/Card';
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
    svg {
      max-height: 50rem;
      position: absolute;
      bottom: 0;
      @media all and (min-width: ${sizes.sm}px) {
        position: static;
      }
    }
  }
  .form {
    width: 100%;
    @media all and (min-width: ${sizes.sm}px) {
      width: 52%;
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
        <StyledFlexContainer breakpoint={`sm`}>
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
          <div className={`form`}>
            <Card mobileTransparency={true} breakpoint={`sm`} altStyling={true}>
              <ContactForm breakpoint={`sm`} />
            </Card>
          </div>
        </StyledFlexContainer>
      </StyledPage>
    </StyledPageWrapper>
  );
}
