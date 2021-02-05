import React, { createContext, useState } from 'react';

type PageProps = {
  children: React.ReactNode;
};

type PageContextProps = [
  PageDataProps,
  React.Dispatch<React.SetStateAction<PageDataProps>>
];

const PageContext = createContext<PageContextProps>(undefined);

export function PageProvider({ children }: PageProps) {
  const [pageData, setPageData] = useState<PageDataProps>({});
  return (
    <PageContext.Provider value={[pageData, setPageData]}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
