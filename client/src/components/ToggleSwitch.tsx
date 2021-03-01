import React, { useRef } from 'react';
import styled from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { colors, layers, theme } from '../helpers/theme';

type StyledToggleSwitchProps = {
  themeKey: ThemeProps['themeKey'];
  backgroundDefault?: string;
  switchDefault?: string;
  backgroundToggled?: string;
  switchToggled?: string;
};

type ToggleSwitchState = {
  state: 'on' | 'off';
};

type ToggleSwitchProps = {
  backgroundDefault?: StyledToggleSwitchProps['backgroundDefault'];
  switchDefault?: StyledToggleSwitchProps['switchDefault'];
  backgroundToggled?: StyledToggleSwitchProps['backgroundToggled'];
  switchToggled?: StyledToggleSwitchProps['switchToggled'];
  defaultToggleState?: ToggleSwitchState['state'];
  adaText: string;
  callback: (x: React.MutableRefObject<any>) => any;
  id?: string;
};

const StyledToggleSwitch = styled.div<StyledToggleSwitchProps>`
  --border-radius: 3rem;
  --standard-size: 2.25rem;
  --toggle-position: 0.3rem;
  --horizontal-spacing: 0.6rem;
  --trainsition-timing: 0.3s;
  --transition-style: ease-in-out;
  width: 100%;
  max-width: 54px;
  position: relative;
  z-index: ${layers.layer1};
  &:focus {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      top: -0.35rem;
      bottom: -0.35rem;
      left: -0.5rem;
      right: -0.5rem;
      border-radius: var(--border-radius);
      background-color: ${({ themeKey }) => theme[themeKey].link.default()};
      z-index: ${layers.layer0};
    }
  }
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
    outline: none;
  }
  label {
    cursor: pointer;
    text-indent: -${layers.layer5}px;
    width: 100%;
    height: calc(var(--standard-size) + var(--horizontal-spacing));
    background: ${(props) => props.backgroundDefault || colors.black()};
    display: block;
    border-radius: var(--border-radius);
    border: calc(var(--horizontal-spacing) / 2) solid ${colors.black()};
    position: relative;
    transition: background var(--trainsition-timing) var(--transition-style),
      border var(--trainsition-timing) var(--transition-style);
    outline: none;
  }
  label:after {
    content: '';
    background: ${(props) => props.switchDefault || colors.offWhite()};
    border-radius: var(--standard-size);
    position: absolute;
    top: 0.175rem;
    left: var(--toggle-position);
    width: calc(var(--standard-size) * 0.85);
    height: calc(var(--standard-size) * 0.85);
    transition: var(--trainsition-timing);
  }
  input:checked + label {
    background: ${(props) => props.backgroundToggled || colors.gray()};
    border-color: ${colors.offWhite()};
  }
  input:checked + label:after {
    left: calc(100% - var(--toggle-position));
    transform: translateX(-100%) rotate(360deg);
    background: ${(props) => props.switchToggled || colors.primaryDark()};
  }
`;

export default function ToggleSwitch({
  backgroundDefault,
  switchDefault,
  backgroundToggled,
  switchToggled,
  defaultToggleState = `off`,
  adaText,
  callback,
  id,
}: ToggleSwitchProps) {
  const ToggleCheckbox = useRef(null);

  const themeKey = useThemeKey();

  const triggerKeyPress = function (e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      return ToggleCheckbox?.current.click();
    }
  };

  return (
    <StyledToggleSwitch
      themeKey={themeKey}
      tabIndex={0}
      backgroundDefault={backgroundDefault}
      switchDefault={switchDefault}
      backgroundToggled={backgroundToggled}
      switchToggled={switchToggled}
      onKeyDown={(e) => triggerKeyPress(e)}
    >
      <input
        tabIndex={0}
        id={id || `toggle-switch`}
        type='checkbox'
        defaultChecked={defaultToggleState === `off` ? false : true}
        onChange={() => callback(ToggleCheckbox?.current?.checked)}
        ref={ToggleCheckbox}
      />
      <label htmlFor={id || `toggle-switch`}>{adaText}</label>
    </StyledToggleSwitch>
  );
}
