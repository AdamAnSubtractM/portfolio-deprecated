import React from 'react';
import Navigation from './Navigation';

export const sitePages = [
  {
    text: `Home`,
    to: `/`,
    order: 1,
  },
  {
    text: `Portfolio`,
    to: `/portfolio`,
    order: 2,
  },
  {
    text: `About`,
    to: `/about`,
    order: 3,
  },
  {
    text: `Resume`,
    to: `/resume`,
    order: 4,
  },
  {
    text: `Contact`,
    to: `/contact`,
    order: 5,
  },
];

export default function MainSiteNaviagtion() {
  return <Navigation links={sitePages} />;
}
