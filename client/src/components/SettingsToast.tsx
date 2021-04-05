import React from 'react';
import styled from 'styled-components';
import { anchorStyles, LinkContents } from '../components/AnchorTag';
import { useThemeKey, useToast } from '../helpers/hooks';
import ThemeSwitcher from './ThemeSwitcher';
import { StyledFlexContainer } from '../styles/LayoutStyles';

type StyledSettingsToastProps = {
  $themeKey: ThemeProps['$themeKey'];
};

type SettingsToastProps = {
  children: React.ReactNode;
};

type SettingsPanelProps = {
  theme: ThemeProps['themeKey'];
};

const StyledSettingsToast = styled.button<StyledSettingsToastProps>`
  font-weight: 600;
  margin: 0;
  padding: 0;
  ${anchorStyles}
`;

const StyledSettingsSection = styled.section`
  width: 100%;
  display: block;
  h2,
  h2,
  h4,
  h5,
  h6 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.6rem;
  }
`;

const SettingsPanel = ({ theme }: SettingsPanelProps) => {
  return (
    <>
      <StyledSettingsSection>
        <h4>Settings:</h4>
        <StyledFlexContainer>
          <p>Toggle Theme:</p>
          <div>
            <ThemeSwitcher id={`settings__panel`} />
            <span>
              Current Theme:{' '}
              {theme === `lightMode` ? `Light Mode` : `Dark Mode`}
            </span>
          </div>
        </StyledFlexContainer>
        <StyledFlexContainer>
          <p>Toggle Animations:</p>
        </StyledFlexContainer>
      </StyledSettingsSection>
    </>
  );
};

export default function SettingsToast({ children }: SettingsToastProps) {
  const themeKey = useThemeKey();
  const { addToast, deleteToast } = useToast();

  const toggleToast = () => {
    const isClient = typeof window !== `undefined`;
    if (!isClient) return;
    const settingsToast = document.querySelector(`#settings__toast`);
    console.log({ settingsToast });
    if (settingsToast) {
      deleteToast(`settings__toast`);
    } else {
      addToast(
        `settings`,
        <SettingsPanel theme={themeKey} />,
        `bottom-right`,
        null,
        `settings__toast`
      );
    }
  };

  return (
    <StyledSettingsToast $themeKey={themeKey} onClick={() => toggleToast()}>
      <LinkContents>{children}</LinkContents>
    </StyledSettingsToast>
  );
}
