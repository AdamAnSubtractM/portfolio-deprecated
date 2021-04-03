import React, { createContext, useState } from 'react';

type PageProviderProps = {
  children: React.ReactNode;
};

type PageContextProps = [
  PageDataProps,
  React.Dispatch<React.SetStateAction<PageDataProps>>
];

const PageContext = createContext<PageContextProps>(undefined);

export function PageProvider({ children }: PageProviderProps) {
  const [pageData, setPageData] = useState<PageDataProps>({});
  return (
    <PageContext.Provider value={[pageData, setPageData]}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
