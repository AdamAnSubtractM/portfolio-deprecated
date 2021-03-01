import React from 'react';
import styled, { css } from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { theme } from '../helpers/theme';

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};

type StyledButtonProps = {
  themeKey: ThemeProps['themeKey'];
  isOpen: MenuToggleProps['isOpen'];
};

const closedTransitionMixin = css`
  transition: top var(--transition-speed) var(--transition-speed)
      var(--transition-type),
    bottom var(--transition-speed) var(--transition-speed)
      var(--transition-type),
    transform var(--transition-speed) var(--transition-type);
`;

const openTransitionMixin = css`
  transition: top var(--transition-speed) var(--transition-type),
    bottom var(--transition-speed) var(--transition-type),
    transform var(--transition-speed) var(--transition-speed)
      var(--transition-type);
`;

const StyledButton = styled.button<StyledButtonProps>`
  --menu-width: 68px;
  --half-height: 4px;
  --height: calc(var(--half-height) * 2);
  --transition-speed: 0.25s;
  --transition-type: cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  min-width: var(--menu-width);
  min-height: ${(props) => (props.isOpen ? `50px` : `initial`)};
  padding: 0;
  &:focus,
  &:hover {
    outline: none;
    &:before,
    &:after {
      outline: none;
      background-color: ${({ themeKey }) => theme[themeKey].link.default()};
    }
    span {
      outline: none;
      color: ${({ themeKey }) => theme[themeKey].link.default()};
    }
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: ${(props) =>
      props.isOpen
        ? `calc(var(--menu-width) - var(--height))`
        : `var(--menu-width)`};
    height: var(--height);
    background-color: ${({ themeKey }) => theme[themeKey].text()};
    ${(props) => (props.isOpen ? openTransitionMixin : closedTransitionMixin)};
  }
  &:before {
    top: ${(props) => (props.isOpen ? `calc(50% - var(--half-height))` : `0`)};
    transform: ${(props) => (props.isOpen ? `rotate(-45deg)` : `rotate(0)`)};
  }
  &:after {
    bottom: ${(props) =>
      props.isOpen ? `calc(50% - var(--half-height))` : `0`};
    transform: ${(props) => (props.isOpen ? `rotate(45deg)` : `rotate(0)`)};
  }
  span {
    display: block;
    text-transform: lowercase;
    font-weight: 900;
    margin: 1rem auto;
    color: ${({ themeKey }) => theme[themeKey].text()};
    -webkit-font-smoothing: antialiased;
    top: ${(props) => (props.isOpen ? `0.25rem` : `0`)};
    left: ${(props) => (props.isOpen ? `-6.25rem` : `0`)};
    position: ${(props) => (props.isOpen ? `absolute` : `static`)};
    transition: top var(--transition-speed) var(--transition-type),
      left var(--transition-speed) var(--transition-speed)
        var(--transition-type);
  }
`;

export default function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  const themeKey = useThemeKey();

  return (
    <StyledButton
      className={`menu__toggle`}
      onClick={toggle}
      themeKey={themeKey}
      isOpen={isOpen}
    >
      <span>{isOpen ? `Close` : `Menu`}</span>
    </StyledButton>
  );
}
