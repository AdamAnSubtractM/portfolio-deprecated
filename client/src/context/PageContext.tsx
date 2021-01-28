import React, { createContext, useState } from 'react';

const PageContext = createContext(undefined);

export function PageProvider({ children }) {
  const [pageData, setPageData] = useState({});
  return (
    <PageContext.Provider value={[pageData, setPageData]}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
