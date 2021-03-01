import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { colors } from '../helpers/theme';
import { useThemeKey } from '../helpers/hooks';

type HeadProps = {
  children?: React.ReactNode;
  location?: { href: string };
  description?: string;
  title: string;
  image?: string;
};

export default function Head({
  children,
  location,
  description,
  title,
  image,
}: HeadProps) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);
  const themeKey = useThemeKey();
  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html
        className={`html html--${
          themeKey === `darkMode` ? 'dark-mode' : 'light-mode'
        }`}
        lang='en'
      />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='alternate icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png?v=Kmwgevzyqw'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png?v=Kmwgevzyqw'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png?v=Kmwgevzyqw'
      />
      <link rel='manifest' href='/site.webmanifest?v=Kmwgevzyqw' />
      <link
        rel='mask-icon'
        href='/safari-pinned-tab.svg?v=Kmwgevzyqw'
        color={colors.secondary()}
      />
      {/* Meta Tags */}
      <meta name='msapplication-TileColor' content={colors.secondary()} />
      <meta name='theme-color' content={colors.secondary()} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <meta name='description' content={site.siteMetadata.description} />
      <meta charSet='utf-8' />
      {/* Open Graph */}
      {location && <meta property='og:url' content={location.href} />}
      <meta property='og:image' content={image || '/logo.svg'} />
      <meta property='og:title' content={title} key='ogtitle' />
      <meta
        property='og:site_name'
        content={site.siteMetadata.title}
        key='ogsitename'
      />
      <meta property='og:description' content={description} key='ogdesc' />
      {children}
    </Helmet>
  );
}
