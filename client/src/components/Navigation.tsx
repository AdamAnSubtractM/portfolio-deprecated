import React from 'react';
import styled from 'styled-components';
import MenuToggle from './MenuToggle';
import { Link } from 'gatsby';
import { colors, sizes } from '../helpers/theme';

const StyledNav = styled.nav`
  background-color: ${colors.static.primary()};
  width: 100%;
  ul,
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ul {
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-flow: column wrap;
    @media all and (min-width: ${sizes.lg}px) {
      flex-flow: row nowrap;
    }
  }
`;

export default function Navigation({ links }) {
  return (
    <StyledNav>
      <MenuToggle toggle={() => console.log(`open`)} />
      <ul>
        {links.map((link, idx) => (
          <li key={`${link.text}-${idx}`}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}
