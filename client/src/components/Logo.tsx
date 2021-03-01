import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { theme } from '../helpers/theme';

type LogoProps = {
  className?: string;
};

type StyledLogoProps = {
  className?: LogoProps['className'];
  $themeKey: ThemeProps['$themeKey'];
};

const logoFocusStyles = css<ThemeProps>`
  &:hover,
  &:focus {
    outline: none;
    .logo__path {
      outline: none;
      &--fill {
        fill: ${({ $themeKey }) => theme[$themeKey].link.default()};
      }
      &--stroke {
        stroke: ${({ $themeKey }) => theme[$themeKey].link.default()};
      }
    }
  }
`;

const StyledLogoLink = styled(Link)<ThemeProps>`
  ${logoFocusStyles}
  &::hover, &:focus {
    border-bottom: 1px dashed
      ${({ $themeKey }) => theme[$themeKey].focusUnderline()};
  }
`;

const StyledLogo = styled.svg<StyledLogoProps>`
  ${logoFocusStyles}
  .logo__path {
    &--fill {
      fill: ${({ $themeKey }) => theme[$themeKey].text()};
    }
    &--stroke {
      stroke: ${({ $themeKey }) => theme[$themeKey].text()};
    }
  }
`;

export default function Logo({ className }: LogoProps) {
  const themeKey = useThemeKey();

  return (
    <StyledLogoLink $themeKey={themeKey} to={`/`}>
      <StyledLogo
        $themeKey={themeKey}
        className={className}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 161 73'
      >
        <path
          className={`logo__path logo__path--fill`}
          d='M55.728 53.5l-6.672-10.8v10.8H38.4V17.98h10.656v18.576l6.768-10.128h12.384L58.08 40.06 68.448 53.5h-12.72zm34.0695-27.264c3.104 0 5.52 1.04 7.248 3.12 1.76 2.08 2.64 4.896 2.64 8.448V53.5h-10.608V39.148c0-1.28-.352-2.288-1.056-3.024-.672-.768-1.584-1.152-2.736-1.152-1.184 0-2.112.384-2.784 1.152-.672.736-1.008 1.744-1.008 3.024V53.5h-10.656V26.428h10.656v4.128c.832-1.28 1.936-2.32 3.312-3.12 1.408-.8 3.072-1.2 4.992-1.2zm39.7565 13.488c0 .736-.048 1.44-.144 2.112h-17.136c.16 2.336 1.136 3.504 2.928 3.504 1.152 0 1.984-.528 2.496-1.584h11.28c-.384 1.92-1.2 3.648-2.448 5.184-1.216 1.504-2.768 2.704-4.656 3.6-1.856.864-3.904 1.296-6.144 1.296-2.688 0-5.088-.56-7.2-1.68-2.08-1.12-3.712-2.72-4.896-4.8-1.152-2.112-1.728-4.576-1.728-7.392 0-2.816.576-5.264 1.728-7.344 1.184-2.112 2.816-3.728 4.896-4.848 2.112-1.12 4.512-1.68 7.2-1.68 2.688 0 5.072.56 7.152 1.68 2.112 1.088 3.744 2.656 4.896 4.704 1.184 2.048 1.776 4.464 1.776 7.248zm-10.8-2.544c0-.896-.288-1.568-.864-2.016-.576-.48-1.296-.72-2.16-.72-1.888 0-2.992.912-3.312 2.736h6.336zm40.378 2.544c0 .736-.048 1.44-.144 2.112h-17.136c.16 2.336 1.136 3.504 2.928 3.504 1.152 0 1.984-.528 2.496-1.584h11.28c-.384 1.92-1.2 3.648-2.448 5.184-1.216 1.504-2.768 2.704-4.656 3.6-1.856.864-3.904 1.296-6.144 1.296-2.688 0-5.088-.56-7.2-1.68-2.08-1.12-3.712-2.72-4.896-4.8-1.152-2.112-1.728-4.576-1.728-7.392 0-2.816.576-5.264 1.728-7.344 1.184-2.112 2.816-3.728 4.896-4.848 2.112-1.12 4.512-1.68 7.2-1.68 2.688 0 5.072.56 7.152 1.68 2.112 1.088 3.744 2.656 4.896 4.704 1.184 2.048 1.776 4.464 1.776 7.248zm-10.8-2.544c0-.896-.288-1.568-.864-2.016-.576-.48-1.296-.72-2.16-.72-1.888 0-2.992.912-3.312 2.736h6.336z'
        />
        <path
          className={`logo__path logo__path--fill logo__path--stroke`}
          d='M11.7645 20.75c-10.06245-6.3907-13.87494.0938-8.5469 8.0625-.08757-.15 1.19268-2.2917 1.84375-3.3438-.04688-.0625-1.5625-4.2344-1.0625-4.2344.28125-.3437 4.20312 1.3907 4.29687 1.2969.09375-.0937 2.18748-1.4062 3.46878-1.7812zM23.4988 50.4721c10.0624 6.3907 13.8749-.0938 8.5468-8.0626.0876.15-1.1926 2.2917-1.8437 3.3438.0469.0625 1.5625 4.2344 1.0625 4.2344-.2813.3438-4.2031-1.3906-4.2969-1.2969-.0937.0938-2.1875 1.4063-3.4687 1.7813z'
        />
        <circle
          className={`logo__path logo__path--stroke`}
          cx='17.5146'
          cy='35.875'
          r='14.25'
          strokeWidth='4'
        />
        <circle
          className={`logo__path logo__path--fill`}
          cx='17.5146'
          cy='35.875'
          r='9.09091'
        />
        <circle
          className={`logo__path logo__path--fill`}
          cx='7.45765'
          cy='45.8182'
          r='3.40851'
        />
        <circle
          className={`logo__path logo__path--fill`}
          cx='27.06'
          cy='25.3068'
          r='4.43182'
        />
      </StyledLogo>
    </StyledLogoLink>
  );
}
