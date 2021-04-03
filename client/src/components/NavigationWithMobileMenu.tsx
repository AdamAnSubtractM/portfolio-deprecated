import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useIsMobile, useThemeKey } from '../helpers/hooks';
import { layers, sizes, theme } from '../helpers/theme';
import A from './AnchorTag';
import FocusEventElement from './FocusEventElement';
import MenuToggle from './MenuToggle';

type NavLinkProps = {
  link: Page;
};

type NavigationProps = {
  links: NavLinkProps['link'][];
  maxWidth?: number;
  backdrop: string;
};

type StyledNavProps = {
  themeKey: ThemeProps['themeKey'];
  isOpen: Boolean;
  maxWidth?: NavigationProps['maxWidth'];
};

const StyledNav = styled(motion.nav)<StyledNavProps>`
  --font-main: 'Poppins', sans-serif;
  --border-style: 2px solid;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : `100%`)};
  color: ${({ themeKey }) => theme[themeKey].text()};
  font-family: var(--font-main);
  font-size: 2.2rem;
  font-weight: 900;
  text-transform: lowercase;
  -webkit-font-smoothing: antialiased;
  order: 2;
  display: flex;
  @media all and (min-width: ${sizes.lg}px) {
    width: 100%;
    order: initial;
    display: initial;
  }
  ul,
  li {
    pointer-events: ${(props) => (props.isOpen ? `initial` : `none`)};
    list-style-type: none;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    z-index: ${layers.layer4};
    @media all and (min-width: ${sizes.lg}px) {
      pointer-events: initial;
    }
  }
  ul {
    position: absolute;
    display: ${(props) => (props.isOpen ? `flex` : `none`)};
    align-content: center;
    justify-content: space-between;
    flex-flow: column wrap;
    top: 8rem;
    padding: 1rem;
    @media all and (min-width: ${sizes.lg}px) {
      display: flex;
      position: static;
      flex-flow: row nowrap;
      top: initial;
      padding: 0;
    }
  }
  a {
    pointer-events: ${(props) => (props.isOpen ? `initial` : `none`)};
    display: block;
    padding: 1rem 0.25rem;
    margin: 1rem 0;
    @media all and (min-width: ${sizes.lg}px) {
      padding: 0.25rem;
      pointer-events: initial;
      margin: 0;
    }
  }
  .menu__toggle {
    position: relative;
    z-index: ${layers.layer4};
    @media all and (min-width: ${sizes.lg}px) {
      display: none;
    }
  }
  .menu__backdrop {
    display: none;
    background-color: gray;
    z-index: ${layers.layer3};
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: block;
    min-height: 100vh;
    @media all and (min-width: ${sizes.lg}px) {
      display: none;
    }
  }
  .link__icon {
    display: flex;
    padding: 0.5rem;
    border: 2px solid;
    border-radius: 50%;
    justify-content: center;
    align-content: center;
    margin-right: 1rem;
    font-size: 2rem;
    @media all and (min-width: ${sizes.lg}px) {
      display: none;
    }
  }
  .link__text {
    font-size: 3rem;
    @media all and (min-width: ${sizes.lg}px) {
      font-size: 2.2rem;
    }
  }
`;

const motionVariants = {
  ul: {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
  li: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
};

export default function Navigation({
  links,
  maxWidth,
  backdrop,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const themeKey = useThemeKey();

  const NavLink = function ({ link }: NavLinkProps) {
    return (
      <A className={`nav__link`} to={link.to}>
        <div className={`link__icon`}>{link.icon}</div>
        <div className={`link__text`}>{link.text}</div>
      </A>
    );
  };

  return (
    <>
      {useIsMobile() ? (
        <StyledNav
          animate={isOpen ? `open` : `closed`}
          initial={false}
          themeKey={themeKey}
          maxWidth={maxWidth}
          isOpen={isOpen}
        >
          {isOpen && <FocusEventElement callback={() => setIsOpen(false)} />}
          <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          <motion.ul variants={motionVariants.ul}>
            {links.map((link, idx) => (
              <motion.li
                key={`link--${idx}`}
                variants={motionVariants.li}
                onClick={() => (isOpen ? setIsOpen(false) : null)}
              >
                <NavLink link={link} />
              </motion.li>
            ))}
          </motion.ul>
          {isOpen && <FocusEventElement callback={() => setIsOpen(false)} />}
          {isOpen && (
            <div
              className={`menu__backdrop`}
              style={{
                background: backdrop,
              }}
            />
          )}
        </StyledNav>
      ) : (
        <StyledNav
          as={`nav`}
          themeKey={themeKey}
          maxWidth={maxWidth}
          isOpen={isOpen}
        >
          <ul>
            {links.map((link, idx) => (
              <li
                key={`link--${idx}`}
                onClick={() => (isOpen ? setIsOpen(false) : null)}
              >
                <NavLink link={link} />
              </li>
            ))}
          </ul>
        </StyledNav>
      )}
    </>
  );
}
