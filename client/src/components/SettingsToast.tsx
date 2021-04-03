import React from 'react';
import { useToast } from '../helpers/hooks';
import ThemeSwitcher from './ThemeSwitcher';

type SettingsToastProps = {
  children: React.ReactNode;
};

const SettingsPanel = () => (
  <div>
    <h4>Settings:</h4>
    <ThemeSwitcher id={`settings__panel`} />
  </div>
);

export default function SettingsToast({ children }: SettingsToastProps) {
  const { addToast, deleteToast } = useToast();

  const toggleToast = () => {
    const settingsToast = document.querySelector(`#settings__toast`);
    console.log({ settingsToast });
    if (settingsToast) {
      deleteToast(`settings__toast`);
    } else {
      addToast(
        `settings`,
        <SettingsPanel />,
        `bottom-right`,
        null,
        `settings__toast`
      );
    }
  };

  return <button onClick={() => toggleToast()}>{children}</button>;
}
