import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { theme } from '../helpers/theme';

type ButtonProps = {
  children: React.ReactNode;
  buttonStyle?: `primary` | `groupedPrimary` | `groupedSecondary`;
  onClick?: (x: any) => any;
  as?: any;
  to?: string;
  openInNewTab?: boolean;
  isInternalLink?: boolean;
  title?: string;
  type?: `submit`;
  swapFocusColor?: boolean;
};

type StyledButtonProps = {
  $themeKey: ThemeProps['themeKey'];
  swapFocusColor?: ButtonProps['swapFocusColor'];
};

const buttonBaseStyles = css<StyledButtonProps>`
  display: inline-flex;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: ${({ $themeKey }) => theme[$themeKey].text()};
  border: 2px solid transparent;
  border-radius: 3rem;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  &:focus {
    outline: none;
    border-color: ${({ $themeKey, swapFocusColor }) =>
      swapFocusColor
        ? theme[$themeKey].link.hover()
        : theme[$themeKey].link.default()};
  }
`;

const primaryButtonStyles = css<StyledButtonProps>`
  color: ${({ $themeKey }) => theme[$themeKey].button.primarySolo.text()};
  background-color: ${({ $themeKey }) =>
    theme[$themeKey].button.primarySolo.background()};
  border-color: ${({ $themeKey }) =>
    theme[$themeKey].button.primarySolo.border()};
  &:focus {
    border-color: ${({ $themeKey, swapFocusColor }) =>
      swapFocusColor
        ? theme[$themeKey].button.primarySolo.focusAlt()
        : theme[$themeKey].button.primarySolo.focus()};
  }
`;

const secondaryButtonStyles = css<StyledButtonProps>`
  color: ${({ $themeKey }) => theme[$themeKey].button.secondary.text()};
  background-color: ${({ $themeKey }) =>
    theme[$themeKey].button.secondary.background};
  border-color: ${({ $themeKey }) =>
    theme[$themeKey].button.secondary.border()};
  &:focus {
    border-color: ${({ $themeKey, swapFocusColor }) =>
      swapFocusColor
        ? theme[$themeKey].button.secondary.focusAlt()
        : theme[$themeKey].button.secondary.focus()};
  }
`;

const groupedButtonStyles = css<StyledButtonProps>`
  border-radius: 0.25rem;
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${buttonBaseStyles}
`;

const StyledPrimaryButton = styled(StyledButton)`
  ${primaryButtonStyles}
`;

const StyledPrimaryLink = styled(Link)<StyledButtonProps>`
  ${buttonBaseStyles}
  ${primaryButtonStyles}
`;

const StyledPrimaryAnchor = styled.a`
  ${buttonBaseStyles}
  ${primaryButtonStyles}
`;

const StyledGroupedPrimary = styled(StyledButton)`
  ${primaryButtonStyles}
  ${groupedButtonStyles}
`;

const StyledGroupedPrimaryLink = styled(Link)`
  ${buttonBaseStyles}
  ${primaryButtonStyles}
  ${groupedButtonStyles}
`;

const StyledGroupedPrimaryAnchor = styled.a`
  ${buttonBaseStyles}
  ${primaryButtonStyles}
  ${groupedButtonStyles}
`;

const StyledGroupedSecondary = styled(StyledGroupedPrimary)`
  ${secondaryButtonStyles}
  ${groupedButtonStyles}
`;

const StyledGroupedSecondaryLink = styled(Link)`
  ${buttonBaseStyles}
  ${secondaryButtonStyles}
  ${groupedButtonStyles}
`;

const StyledGroupedSecondaryAnchor = styled.a`
  ${buttonBaseStyles}
  ${secondaryButtonStyles}
  ${groupedButtonStyles}
`;

export default function Button({
  children,
  buttonStyle,
  onClick,
  to,
  title = `Click to view this content.`,
  openInNewTab,
  isInternalLink = true,
  type,
  swapFocusColor,
}: ButtonProps) {
  const themeKey = useThemeKey();

  switch (buttonStyle) {
    case `primary`:
      return to ? (
        <>
          {isInternalLink ? (
            <StyledPrimaryLink
              $themeKey={themeKey}
              title={title}
              to={to}
              swapFocusColor={swapFocusColor}
              className={`button button--primary button--primary-solo`}
            >
              {children}
            </StyledPrimaryLink>
          ) : (
            <StyledPrimaryAnchor
              $themeKey={themeKey}
              title={title}
              href={to}
              target={openInNewTab ? `_blank` : `_self`}
              rel={openInNewTab ? `noopener noreferrer` : null}
              swapFocusColor={swapFocusColor}
            >
              {children}
            </StyledPrimaryAnchor>
          )}
        </>
      ) : (
        <StyledPrimaryButton
          $themeKey={themeKey}
          onClick={onClick}
          title={title}
          swapFocusColor={swapFocusColor}
          className={`button button--primary button--primary-solo`}
          type={type}
        >
          {children}
        </StyledPrimaryButton>
      );
    case `groupedPrimary`:
      return to ? (
        <>
          {isInternalLink ? (
            <StyledGroupedPrimaryLink
              $themeKey={themeKey}
              title={title}
              to={to}
              swapFocusColor={swapFocusColor}
              className={`button button--primary button--primary-grouped`}
            >
              {children}
            </StyledGroupedPrimaryLink>
          ) : (
            <StyledGroupedPrimaryAnchor
              $themeKey={themeKey}
              title={title}
              href={to}
              target={openInNewTab ? `_blank` : `_self`}
              rel={openInNewTab ? `noopener noreferrer` : null}
              swapFocusColor={swapFocusColor}
              className={`button button--primary button--primary-grouped`}
            >
              {children}
            </StyledGroupedPrimaryAnchor>
          )}
        </>
      ) : (
        <StyledGroupedPrimary
          $themeKey={themeKey}
          $buttonStyle={buttonStyle}
          onClick={onClick}
          to={isInternalLink ? to : null}
          href={!isInternalLink ? to : null}
          as={StyledButton}
          title={title}
          target={openInNewTab ? `_blank` : `_self`}
          rel={openInNewTab ? `noopener` : null}
          swapFocusColor={swapFocusColor}
          className={`button button--primary button--primary-grouped`}
          type={type}
        >
          {children}
        </StyledGroupedPrimary>
      );
    case `groupedSecondary`:
      return to ? (
        <>
          {isInternalLink ? (
            <StyledGroupedSecondaryLink
              $themeKey={themeKey}
              title={title}
              to={to}
              swapFocusColor={swapFocusColor}
              className={`button button--secondary button--secondary-grouped`}
            >
              {children}
            </StyledGroupedSecondaryLink>
          ) : (
            <StyledGroupedSecondaryAnchor
              $themeKey={themeKey}
              title={title}
              href={to}
              target={openInNewTab ? `_blank` : `_self`}
              rel={openInNewTab ? `noopener noreferrer` : null}
              swapFocusColor={swapFocusColor}
              className={`button button--secondary button--secondary-grouped`}
            >
              {children}
            </StyledGroupedSecondaryAnchor>
          )}
        </>
      ) : (
        <StyledGroupedSecondary
          $themeKey={themeKey}
          $buttonStyle={buttonStyle}
          onClick={onClick}
          to={isInternalLink ? to : null}
          href={!isInternalLink ? to : null}
          as={StyledButton}
          title={title}
          target={openInNewTab ? `_blank` : `_self`}
          rel={openInNewTab ? `noopener` : null}
          swapFocusColor={swapFocusColor}
          className={`button button--secondary button--secondary-grouped`}
          type={type}
        >
          {children}
        </StyledGroupedSecondary>
      );
    default:
      return (
        <StyledButton
          $themeKey={themeKey}
          onClick={onClick}
          title={title}
          swapFocusColor={swapFocusColor}
          className={`button`}
          type={type}
        >
          {children}
        </StyledButton>
      );
  }
}
