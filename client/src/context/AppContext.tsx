import React, { createContext, useEffect, useState } from 'react';
import Toaster from '../components/Toaster';
import { useCookie } from '../helpers/hooks';

type AppProviderProps = {
  children: React.ReactNode;
};

type AppDataContext = {
  themeKey: ThemeProps['themeKey'];
  animationsDisabled: boolean;
};

const AppContext = createContext(undefined);

export function AppProvider({ children }: AppProviderProps) {
  const [themeCookie, updateThemeCookie] = useCookie(`themeKey`, `darkMode`);
  const [animationsDisabledCookie, updateAnimationsDisabledCookie] = useCookie(
    `animationsDisabled`,
    `false`
  );
  const [appData, setAppData] = useState<AppDataContext>({
    themeKey: themeCookie === `lightMode` ? themeCookie : `darkMode`,
    animationsDisabled: animationsDisabledCookie === `true` ? true : false,
  });

  useEffect(() => {
    updateThemeCookie(appData?.themeKey, 365);
  }, [appData?.themeKey]);

  useEffect(() => {
    updateAnimationsDisabledCookie(`${appData?.animationsDisabled}`, 365);
  }, [appData?.animationsDisabled]);

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      {children}
      <Toaster />
    </AppContext.Provider>
  );
}

export default AppContext;
