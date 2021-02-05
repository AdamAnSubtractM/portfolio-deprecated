import React from 'react';
import Layout from './src/components/Layout';
import { AppProvider } from './src/context/AppContext';
import { PageProvider } from './src/context/PageContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return (
    <AppProvider>
      <PageProvider>{element}</PageProvider>
    </AppProvider>
  );
}
