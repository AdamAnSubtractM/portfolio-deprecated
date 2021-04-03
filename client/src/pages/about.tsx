import React from 'react';
import styled from 'styled-components';
import A from '../components/AnchorTag';
import Book from '../components/Book';
import Button from '../components/Button';
import Dumbbell from '../components/Dumbbell';
import Head from '../components/Head';
import Protein from '../components/Protein';
import Volleyball from '../components/Volleyball';
import { useThemeKey } from '../helpers/hooks';
import { sizes, layers, theme } from '../helpers/theme';
import { StyledFlexContainer, StyledPageWrapper } from '../styles/LayoutStyles';

const StyledPage = styled.div<ThemeProps>`
  svg,
  .svg {
    position: absolute;
    top: 0;
    width: 100px;
    &--dumbbell {
      top: 0%;
      left: -5%;
      @media all and (min-width: ${sizes.sm}px) {
        top: -20%;
        left: -10%;
      }
    }
    &--protein {
      right: -5%;
      top: 45%;
      @media all and (min-width: ${sizes.sm}px) {
        top: -20%;
        right: 20%;
      }
    }
    &--book {
      top: 72%;
      left: 20%;
      @media all and (min-width: ${sizes.sm}px) {
        top: 85%;
        left: 30%;
      }
    }
    &--volleyball {
      top: 91%;
      right: 16%;
      @media all and (min-width: ${sizes.sm}px) {
        right: -10%;
        top: 50%;
      }
    }
  }

  .content {
    position: relative;
    z-index: ${layers.layer1};
    background-color: ${({ themeKey }) => theme[themeKey].background.main(0.8)};
    @media all and (min-width: ${sizes.sm}px) {
      background-color: ${({ themeKey }) =>
        theme[themeKey].background.main(0.6)};
      width: 46%;
      margin-right: 2%;
    }
  }
`;

export default function AboutPage() {
  const themeKey = useThemeKey();
  return (
    <StyledPageWrapper background={theme[themeKey].background.main()}>
      <StyledPage themeKey={themeKey}>
        <Head title={`About`} />
        <h1>About</h1>
        <StyledFlexContainer breakpoint={`sm`}>
          <article className={`content`}>
            <h2>My Background</h2>
            <p>
              Hey, so I'm Adam Knee and yeah... that's actually my last name.
              I’m an HTML Architect, a CSS Blacksmith, and a JavaScript code
              slinger. I am currently focusing on my skills in ReactJS at{' '}
              <A
                to={`https://dminc.com/`}
                isInternalLink={false}
                openInNewTab={true}
                title={`Click to view DMI's site.`}
              >
                DMI
              </A>
              , previously at{' '}
              <A
                to={`https://www.wesco.com/`}
                isInternalLink={false}
                openInNewTab={true}
                title={`Click to view Wesco's site.`}
              >
                WESCO
              </A>{' '}
              and{' '}
              <A
                to={`https://www.dickssportinggoods.com/`}
                isInternalLink={false}
                openInNewTab={true}
                title={`Click to view DICK's Sporting Good's site.`}
              >
                DICK's Sporting Goods
              </A>
              , but love working in a{' '}
              <A
                to={`/uses`}
                isInternalLink={true}
                openInNewTab={false}
                title={`Click to view the tools and tech I use.`}
              >
                variety of different tech stacks
              </A>
              . Grab a copy of my resume below for a full list of skills and
              experience.
            </p>
            <p>
              Currently based in Pittsburgh, I attended{' '}
              <A
                to={`https://ptcollege.edu/`}
                isInternalLink={false}
                openInNewTab={true}
                title={`Click to view Pittsburgh Technical College's site.`}
              >
                Pittsburgh Technical Institute
              </A>{' '}
              (now known as Pittsburgh Technical College) and have a degree in
              Multimedia Technologies with a concentration in Responsive web
              design and development. Even though I'm no longer in college, I'm
              always learning and keeping up with the fast and ever changing
              industry!
            </p>
            <Button
              buttonStyle={`primary`}
              to={`/resume`}
              title={`Click to view Adam Knee's resume.`}
            >
              View Resume &#8594;
            </Button>
          </article>
          <article className={`content`}>
            <h2>The Interesting Stuff</h2>
            <p>
              Some of my favorite hobbies include weight lifting, playing with
              my German Shepherd doggo named Nala, hanging out with friends, and
              last but not least, hiking and biking! My favorite sport to play
              is volleyball and my favorite sports to watch are football and
              hockey. Sadly, I don’t get to play much volleyball these days
              though. Additionally, I enjoy listening to audiobooks when I get
              the time and if I had to recommend a book series to read (or
              listen to), it would be{' '}
              <A
                to={`https://www.patrickrothfuss.com/content/books.asp`}
                isInternalLink={false}
                openInNewTab={true}
                title={`Click to view more about The KingKiller Chronicle.`}
              >
                The KingKiller Chronicle
              </A>
              . You should definitely check it out!
            </p>
            <p>
              Unfortunately, there is so much more to me than what I can fit on
              this page, so please feel free to get in touch with me to get to
              know me better. I’m looking forward to hearing from you!
            </p>
            <Button
              buttonStyle={`primary`}
              to={`/contact`}
              title={`Click to contact me.`}
            >
              Contact Me &#8594;
            </Button>
          </article>
          <Dumbbell y={150} svgTransitionSize={`sm`} />
          <Protein duration={8} svgTransitionSize={`sm`} />
          <Volleyball y={200} duration={6} svgTransitionSize={`sm`} />
          <Book y={175} duration={8} svgTransitionSize={`sm`} />
        </StyledFlexContainer>
      </StyledPage>
    </StyledPageWrapper>
  );
}
