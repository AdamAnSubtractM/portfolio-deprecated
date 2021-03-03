import React from 'react';
import styled from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { layers, sizes, theme } from '../helpers/theme';

type StyledCardProps = {
  themeKey: ThemeProps['themeKey'];
  mobileTransparency?: boolean;
  desktopTransparency?: boolean;
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: string;
  altStyling?: boolean;
};

type CardProps = {
  children: React.ReactNode;
  mobileTransparency?: StyledCardProps['mobileTransparency'];
  desktopTransparency?: StyledCardProps['desktopTransparency'];
  breakpoint?: StyledCardProps['breakpoint'];
  maxWidth?: StyledCardProps['maxWidth'];
  altStyling?: StyledCardProps['altStyling'];
};

const StyledCard = styled.div<StyledCardProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || `500px`};
  min-height: 30rem;
  border-radius: 3rem;
  padding: 2rem;
  background-color: ${({ themeKey, mobileTransparency, altStyling }) =>
    altStyling
      ? theme[themeKey].card.alt.background(mobileTransparency ? 0.8 : 1)
      : theme[themeKey].card.background(mobileTransparency ? 0.8 : 1)};
  color: ${({ themeKey, altStyling }) =>
    altStyling ? theme[themeKey].card.alt.text() : theme[themeKey].card.text()};
  box-shadow: ${({ themeKey }) => theme[themeKey].boxShadow};
  margin: auto;
  position: relative;
  z-index: ${layers.layer1};
  @media all and (min-width: ${(props) => sizes[props.breakpoint || `md`]}px) {
    background-color: ${({ themeKey, desktopTransparency, altStyling }) =>
      altStyling
        ? theme[themeKey].card.alt.background(desktopTransparency ? 0.8 : 1)
        : theme[themeKey].card.background(desktopTransparency ? 0.8 : 1)};
  }
`;

export default function Card({
  children,
  mobileTransparency,
  desktopTransparency,
  breakpoint,
  maxWidth,
  altStyling,
}: CardProps) {
  const themeKey = useThemeKey();
  return (
    <StyledCard
      themeKey={themeKey}
      mobileTransparency={mobileTransparency}
      desktopTransparency={desktopTransparency}
      breakpoint={breakpoint}
      maxWidth={maxWidth}
      altStyling={altStyling}
    >
      {children}
    </StyledCard>
  );
}
