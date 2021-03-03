import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { theme } from '../helpers/theme';

type AnchorTagProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
  isInternalLink?: boolean;
  title?: string;
  openInNewTab?: boolean;
  isIcon?: boolean;
};

const anchorStyles = css<ThemeProps>`
  text-decoration: none;
  transition: border-color 0.3s ease-out;
  position: relative;
  &:not(.nav__link) {
    color: ${({ $themeKey }) => theme[$themeKey].link.default()};
    &:visited {
      color: ${({ $themeKey }) => theme[$themeKey].link.default()};
    }
    &:hover,
    &:focus {
      color: ${({ $themeKey }) => theme[$themeKey].link.hover()};
      outline: 0;
      span {
        background-color: ${({ $themeKey }) => theme[$themeKey].background()};
      }
    }
  }
  &.icon {
    color: ${({ $themeKey }) => theme[$themeKey].text()};
    border-bottom: none;
    &:visited {
      color: ${({ $themeKey }) => theme[$themeKey].link.default()};
    }
    &:hover,
    &:focus {
      color: inherit;
      outline: 0;
      border-bottom: none;
      span {
        background-color: transparent;
      }
    }
    svg {
      color: inherit;
    }
  }
  &:visited {
    color: ${({ $themeKey }) => theme[$themeKey].text()};
  }
  &:hover,
  &:focus {
    color: ${({ $themeKey }) => theme[$themeKey].link.default()};
    outline: 0;
    border-bottom: 1px dashed
      ${({ $themeKey }) => theme[$themeKey].focusUnderline()};
  }
  &[aria-current='page'] {
    color: ${({ $themeKey }) => theme[$themeKey].link.default()};
  }
`;

const StyledLink = styled.span<ThemeProps>`
  ${anchorStyles}
  a {
    ${anchorStyles}
  }
`;

export default function AnchorTag({
  className,
  isInternalLink = true,
  children,
  to,
  title,
  openInNewTab,
  isIcon,
}: AnchorTagProps) {
  const themeKey = useThemeKey();

  const LinkContents = function () {
    return (
      <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ display: `inline-flex`, alignItems: `center` }}
      >
        {children}
      </motion.span>
    );
  };

  return (
    <>
      {!isInternalLink ? (
        <StyledLink
          as={`a`}
          className={
            isIcon ? `icon${className ? ` ${className}` : ``}` : className
          }
          href={to}
          title={title || `Click to leave my site and view this content.`}
          target={openInNewTab ? `_blank` : `_self`}
          rel={openInNewTab ? `noopener noreferrer` : null}
          $themeKey={themeKey}
        >
          <LinkContents />
        </StyledLink>
      ) : (
        <StyledLink $themeKey={themeKey}>
          <Link
            to={to}
            className={
              isIcon ? `icon${className ? ` ${className}` : ``}` : className
            }
            title={title || `Click to view this content.`}
            target={openInNewTab ? `_blank` : `_self`}
            rel={openInNewTab ? `noopener` : null}
          >
            <LinkContents />
          </Link>
        </StyledLink>
      )}
    </>
  );
}
