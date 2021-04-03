import React from 'react';
import { RiCloseCircleLine as Close } from 'react-icons/ri';
import styled from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { theme } from '../helpers/theme';

type CloseButtonProps = {
  onClick: (x?: any) => any;
};

const StyledCloseButton = styled.button<ThemeProps>`
  font-size: 2.4rem;
  padding: 0;
  margin: 0;
  appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ themeKey }) => theme[themeKey].toast.text()};
  &:focus {
    outline: 0;
    color: ${({ themeKey }) => theme[themeKey].toast.focus()};
  }
`;

export default function CloseButton({ onClick }: CloseButtonProps) {
  const themeKey = useThemeKey();
  return (
    <StyledCloseButton themeKey={themeKey} onClick={onClick}>
      <Close />
    </StyledCloseButton>
  );
}
