import React, { createContext, useState } from 'react';

type AppProps = {
  children: React.ReactNode
}

const AppContext = createContext(undefined);

export function AppProvider({ children }: AppProps) {
  const [appData, setAppData] = useState<ThemeProps>({
    themeKey: `lightMode`,
  });

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
