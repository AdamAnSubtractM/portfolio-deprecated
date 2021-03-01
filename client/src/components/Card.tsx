import React from 'react';
import styled from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { theme } from '../helpers/theme';

type StyledCardProps = {
  themeKey: ThemeProps['themeKey'];
  maxWidth?: string;
};

type CardProps = {
  children: React.ReactNode;
};

const StyledCard = styled.div<StyledCardProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || `500px`};
  min-height: 30rem;
  border-radius: 3rem;
  padding: 2rem;
  background-color: ${({ themeKey }) => theme[themeKey].card()};
  box-shadow: ${({ themeKey }) => theme[themeKey].boxShadow};
`;

export default function Card({ children }: CardProps) {
  const themeKey = useThemeKey();
  return <StyledCard themeKey={themeKey}>{children}</StyledCard>;
}
