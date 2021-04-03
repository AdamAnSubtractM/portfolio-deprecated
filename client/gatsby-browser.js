import React from 'react';
import Layout from './src/components/Layout';
import { AppProvider } from './src/context/AppContext';
import { PageProvider } from './src/context/PageContext';
import { ToastProvider } from './src/context/ToastContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return (
    <ToastProvider>
      <AppProvider>
        <PageProvider>{element}</PageProvider>
      </AppProvider>
    </ToastProvider>
  );
}
