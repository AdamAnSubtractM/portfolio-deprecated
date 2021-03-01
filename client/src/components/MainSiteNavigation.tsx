import React from 'react';
import { BsListOl as Uses } from 'react-icons/bs';
import { GoHome as Home } from 'react-icons/go';
import { GrMail as Contact } from 'react-icons/gr';
import { HiCode as Portfolio } from 'react-icons/hi';
import { ImNewspaper as Resume } from 'react-icons/im';
import { IoInformationSharp as About } from 'react-icons/io5';
import { useThemeKey } from '../helpers/hooks';
import { theme, sizes } from '../helpers/theme';
import NavWMobileMenu from './NavigationWithMobileMenu';

export const sitePages: Page[] = [
  {
    text: `Home`,
    to: `/`,
    icon: <Home />,
    order: 1,
  },
  {
    text: `Portfolio`,
    to: `/portfolio`,
    icon: <Portfolio />,
    order: 2,
  },
  {
    text: `About`,
    to: `/about`,
    icon: <About />,
    order: 3,
  },
  {
    text: `Resume`,
    to: `/resume`,
    icon: <Resume />,
    order: 4,
  },
  {
    text: `Contact`,
    to: `/contact`,
    icon: <Contact />,
    order: 5,
  },
  {
    text: `/uses`,
    to: `/uses`,
    icon: <Uses />,
    order: 6,
  },
];

export default function MainSiteNaviagtion() {
  const themeKey = useThemeKey();

  return (
    <NavWMobileMenu
      links={sitePages}
      maxWidth={sizes.sm}
      backdrop={
        themeKey === 'lightMode'
          ? `${theme[
              themeKey
            ].backgroundAlt()} url('stars-bg-alt.svg') center/50% repeat`
          : `${theme[
              themeKey
            ].backgroundAlt()} url('stars-bg.svg') center/50% repeat`
      }
    />
  );
}
