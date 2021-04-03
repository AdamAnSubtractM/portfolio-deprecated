import React from 'react';
import styled from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { colors, sizes, theme } from '../helpers/theme';
import A from './AnchorTag';
import SettingsToast from './SettingsToast';

const StyledFooter = styled.footer<ThemeProps>`
  background: ${({ themeKey }) => theme[themeKey].background.main()};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  padding: 2rem;
  font-size: 1.2rem;
  border-top: 1px solid ${colors.gray()};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media all and (min-width: ${sizes.md}px) {
    flex-flow: row wrap;
    justify-content: space-between;
    text-align: left;
  }

  > div {
    background: ${({ themeKey }) => theme[themeKey].background.main(0.65)};
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    li {
      padding: 0.25rem 1rem;
      border-right: 1px solid;
      &:last-child {
        border: none;
      }
      @media all and (min-width: ${sizes.md}px) {
        &:last-child {
          padding-right: 0;
        }
      }
    }
  }
  * {
    font-size: 1.2rem;
  }
`;

export default function Footer() {
  const themeKey = useThemeKey();
  const year = new Date().getFullYear();
  return (
    <StyledFooter themeKey={themeKey} className={`footer`}>
      <div>
        <p>
          All artwork designed by yours truly, using{' '}
          <A
            to={`https://www.figma.com/`}
            isInternalLink={false}
            openInNewTab={true}
          >
            Fimga
          </A>
          . Coded&nbsp;and&nbsp;compiled&nbsp;using&nbsp;
          <A
            to={`https://www.gatsbyjs.com/`}
            isInternalLink={false}
            openInNewTab={true}
          >
            GatbsyJS
          </A>
          .
        </p>
        <p>
          Found a bug or spelling mistake? Try&nbsp;submiting&nbsp;a&nbsp;
          <A
            to={`https://github.com/AdamAnSubtractM/portfolio/pulls`}
            isInternalLink={false}
            openInNewTab={true}
          >
            Pull&nbsp;Request
          </A>
          &nbsp;to&nbsp;fix&nbsp;it.&nbsp;♥️
        </p>
      </div>
      <div>
        <ul>
          <li>
            <SettingsToast>Settings</SettingsToast>
          </li>
          <li>
            <A
              to={`/privacy-policy`}
              isInternalLink={true}
              openInNewTab={false}
            >
              Privacy Policy
            </A>
          </li>
          <li>
            <A
              to={`https://twitter.com/AdamAnSubtractM`}
              isInternalLink={false}
              openInNewTab={true}
            >
              Twitter
            </A>
          </li>
        </ul>
        <p>&copy; {year} Adam Knee. All Rights Reserved.</p>
      </div>
    </StyledFooter>
  );
}
