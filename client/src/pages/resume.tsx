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
`;

export default function ResumePage() {
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
        <Head title={`Resume`} />
        <h1>Resume</h1>
        <StyledFlexContainer breakpoint={`sm`}>
          <article className={`content`}>
            <h2>Standard Resume</h2>
            <p>
              Most people are going to want to grab this resume. This resume is
              a standard resume that has my branding and formatting the way it
              should be. The other resume is meant specifically for
              consulting/recruiting firms so that they can paste their
              logo/branding on it. That doesn't apply to most people, so go
              ahead and just grab this one below!
            </p>
            <Button
              buttonStyle={`primary`}
              to={`/knee-resume-main-web-safe-21.pdf`}
              title={`Click to view Adam Knee's resume.`}
            >
              View Normal Resume &#8594;
            </Button>
          </article>
          <article className={`content`}>
            <h2>Consultant/Recruiter Resume</h2>
            <p>
              A lot of the time, consulting/recruiting firms like to screenshot
              your resume, throw it in a word doc, and then paste their logo on
              the top of it. The problem is that this often screws up the
              branding, spacing, and print margins on the resume and that drives
              me absolutely crazy. This version has a dedicated space for you to
              paste your logo/branding.
            </p>
            <Button
              buttonStyle={`primary`}
              to={`/knee-resume-recruiter-web-safe-21.pdf`}
              title={`Click to view Adam Knee's partner resume.`}
            >
              View Partner Resume &#8594;
            </Button>
          </article>
        </StyledFlexContainer>
      </StyledPage>
    </StyledPageWrapper>
  );
}
