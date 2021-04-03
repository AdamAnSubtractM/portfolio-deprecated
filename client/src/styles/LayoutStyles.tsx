import React from 'react';
import styled from 'styled-components';
import { sizes } from '../helpers/theme';

type StyledFlexContainerProps = {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  preventMobileStack?: boolean;
  minWidth?: string;
  breakpoint?: Sizes[`keys`];
};

type StyledSectionProps = {
  sectionSize: 'small' | 'large';
};

type StyledPageWrapperProps = {
  children: React.ReactNode;
  background?: string;
  sectionSize?: StyledSectionProps['sectionSize'];
  heading?: string;
};

type StyledPageProps = {
  background?: StyledPageWrapperProps['background'];
};

export const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || `space-between`};
  align-items: ${(props) => props.alignItems || `center`};
  flex-flow: ${(props) =>
    props.preventMobileStack ? `row wrap` : `column wrap`};
  min-width: ${(props) => props.minWidth || `initial`};
  position: relative;
  @media all and (min-width: ${(props) => sizes[props.breakpoint || `md`]}px) {
    flex-flow: row wrap;
  }
`;

export const StyledGridContainer = styled.div`
  display: grid;
`

export const StyledPage = styled.div<StyledPageProps>`
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${(props) => props.background || `transparent`};
  overflow: hidden;
  padding-bottom: 5rem;
`;

export const StyledSection = styled.section<StyledSectionProps>`
  padding: 1rem 2rem;
  width: 100%;
  max-width: ${(props) =>
    props.sectionSize === 'large' ? '1600px' : '1200px'};
  margin: auto;
`;

export const StyledPageWrapper = ({
  children,
  background,
  sectionSize,
  heading,
}: StyledPageWrapperProps) => (
  <StyledPage background={background}>
    <StyledSection sectionSize={sectionSize}>
      {heading && <h1>{heading}</h1>}
      {children}
    </StyledSection>
  </StyledPage>
);
