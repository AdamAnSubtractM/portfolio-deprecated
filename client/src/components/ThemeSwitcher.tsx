import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { colors } from '../helpers/theme';
import ToggleSwitch from './ToggleSwitch';

export default function ThemeSwitcher() {
  const [appData, setAppData] = useContext(AppContext);

  return (
    <ToggleSwitch
      id={`toggle-switch--theme-switcher`}
      adaText={`Click to toggle theme from ${
        appData?.themeKey === `lightMode`
          ? `light mode to dark mode.`
          : `dark mode to light mode.`
      }`}
      callback={() =>
        setAppData({
          themeKey:
            appData?.themeKey === `lightMode` ? `darkMode` : `lightMode`,
        })
      }
      defaultToggleState={appData?.themeKey === `lightMode` ? `off` : `on`}
      backgroundDefault={`${colors.offWhite()} url('/cloud.svg') 84%/44% no-repeat`}
      backgroundToggled={`${colors.black()} url('/star.svg') 18%/24% no-repeat`}
      switchDefault={colors.accentFour()}
      switchToggled={`url('/moon-crescent.svg') 50%/100%`}
    />
  );
}
