import React from 'react';
import styled from 'styled-components';
import A from '../components/AnchorTag';
import { useThemeKey } from '../helpers/hooks';
import { layers, theme } from '../helpers/theme';

type IconProps = {
  children: React.ReactNode;
  isInternalLink?: boolean;
  to?: string;
  openInNewTab?: boolean;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  cursor?: 'default' | 'pointer';
};

type StyledIconProps = {
  width?: IconProps['width'];
  height?: IconProps['height'];
  maxWidth?: IconProps['maxWidth'];
  maxHeight?: IconProps['maxHeight'];
  cursor?: IconProps['cursor'];
  themeKey: ThemeProps['themeKey'];
};

const StyledIcon = styled.span<StyledIconProps>`
  cursor: ${(props) => props.cursor || `default`};
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 2.4rem;
  position: relative;
  z-index: ${layers.layer1};
  outline: none;
  color: inherit;
  &:focus,
  &:hover {
    outline: none;
    color: ${({ themeKey }) => theme[themeKey].background.main()};
    &:after {
      content: '';
      position: absolute;
      top: -0.5rem;
      bottom: -0.5rem;
      left: -0.5rem;
      right: -0.5rem;
      border-radius: 50%;
      background-color: ${({ themeKey }) => theme[themeKey].link.default()};
      z-index: ${layers.layer0};
    }
  }
  svg {
    max-width: ${(props) => props.maxWidth || `50px`};
    width: ${(props) => props.width || `30px`};
    height: ${(props) => props.height || `auto`};
    max-height: ${(props) => props.maxHeight || `initial`};
  }
`;

export default function Icon({
  children,
  isInternalLink = false,
  to,
  openInNewTab,
}: IconProps) {
  const themeKey = useThemeKey();

  return (
    <>
      {to ? (
        <StyledIcon
          themeKey={themeKey}
          as={A}
          isIcon={true}
          isInternalLink={isInternalLink}
          openInNewTab={openInNewTab}
          to={to}
          cursor={`pointer`}
          className={`icon`}
        >
          {children}
        </StyledIcon>
      ) : (
        <StyledIcon themeKey={themeKey} className={`icon`}>
          {children}
        </StyledIcon>
      )}
    </>
  );
}
