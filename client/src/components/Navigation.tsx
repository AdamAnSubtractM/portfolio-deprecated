import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import MenuToggle from './MenuToggle';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { theme, sizes } from '../helpers/theme';
import { useIsMobile } from '../helpers/hooks';

type NavLinkProps = {
  link: Page;
};

type NavigationProps = {
  links: NavLinkProps['link'][];
};

const StyledNav = styled(motion.nav)<ThemeProps>`
  width: 100%;
  color: ${({ themeKey }) => theme[themeKey].text()};
  background-color: ${({ themeKey }) => theme[themeKey].background()};
  ul,
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ul {
    position: absolute;
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-flow: column wrap;
    @media all and (min-width: ${sizes.lg}px) {
      position: static;
      flex-flow: row nowrap;
    }
  }
  .menu {
    &__backdrop {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ themeKey }) => theme[themeKey].background()};
      @media all and (min-width: ${sizes.lg}px) {
        display: none;
      }
    }
  }
  .menu-toggle {
    position: absolute;
    top: 0;
    right: 0;
    @media all and (min-width: ${sizes.lg}px) {
      display: none;
    }
  }
`;

const motionVariants = {
  backdrop: {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 94.25% 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 94.25% 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  },
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

export default function Navigation({ links }: NavigationProps) {
  const [appData] = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const { themeKey } = appData;

  const NavLink = function ({ link }: NavLinkProps) {
    return (
      <Link to={link.to}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <div className={`link__icon`}>icon</div>
          <div>{link.text}</div>
        </motion.div>
      </Link>
    );
  };

  return (
    <>
      {useIsMobile() ? (
        <StyledNav
          animate={isOpen ? `open` : `closed`}
          initial={false}
          themeKey={themeKey}
        >
          <motion.div
            className={`menu__backdrop`}
            variants={motionVariants.backdrop}
          />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
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
        </StyledNav>
      ) : (
        <StyledNav as={`nav`} themeKey={themeKey}>
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
