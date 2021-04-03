import styled, { css } from 'styled-components';
import { theme } from '../helpers/theme';

type StyledLabelProps = {
  hideLabel?: boolean;
};

const inputStyles = css<ThemeProps>`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  border: ${({ themeKey }) => theme[themeKey].input.border};
  &:focus {
    border-color: ${({ themeKey }) => theme[themeKey].input.focusColor()};
  }
`;

export const StyledRequiredIndicator = styled.span<ThemeProps>`
  color: ${({ themeKey }) => theme[themeKey].input.error()};
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-transform: lowercase;
  font-size: 2rem;
  ${(props) =>
    props.hideLabel &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    `}
`;

export const StyledInput = styled.input<ThemeProps>`
  ${inputStyles}
`;

export const StyledTextarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 145px;
`;
