import React from 'react';
import Head from '../components/Head';
import NotFound from '../components/NotFound';

export default function NotFoundPage() {
  return (
    <>
      <Head title={`Not Found`} />
      <NotFound />
    </>
  );
}
