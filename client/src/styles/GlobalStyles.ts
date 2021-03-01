import { createGlobalStyle } from 'styled-components';
import { theme } from '../helpers/theme';

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Poppins';
      src: url('Poppins-Black.ttf') format('truetype');
      font-weight: normal;
    }
    @font-face {
      font-family: 'Poppins';
      src: url('Poppins-Black.ttf') format('truetype');
      font-weight: 900;
    }
    @font-face {
      font-family: 'Poppins';
      src: url('Poppins-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }
    @font-face {
      font-family: 'Playfair Display';
      src: url('PlayfairDisplay-VariableFont_wght.ttf') format('truetype');
      font-weight: 100 1000;
    }
    :root {
      --font-main: 'Poppins', sans-serif;
      --font-secondary: 'Playfair Display', serif;
    }
    *, ::before, ::after {
      box-sizing: border-box;
    }
    html,.html {
      font-size: 62.5%;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: ${theme.darkMode.scrollbar()} transparent;
      &::before, &::after {
        box-sizing: border-box;
      }
      &--light-mode {
        scrollbar-color: ${theme.lightMode.scrollbar()} transparent;
        body {
          /* &::-webkit-scrollbar-track {
            background: transparent;
          }
          &::-webkit-scrollbar-thumb {
            background-color: ${theme.lightMode.scrollbar()};
            border-radius: .5rem;
            border: 3px solid transparent;
          } */
        }
      }
    }
    body {
      font-family: var(--font-secondary);
      font-size: 1.6rem;
      min-height: 100vh;
      overflow-x: hidden;
      line-height: 1.5;
      /* &::-webkit-scrollbar {
        width: 1rem;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${theme.darkMode.scrollbar()};
        border-radius: .5rem;
        border: 3px solid transparent;
      } */
    }
    button {
      background: transparent;
      border: none;
    }
    button + button, .button + .button  {
      margin-left: .5rem;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-main);
      font-weight: 900;
      text-transform: lowercase;
      line-height: 1.3;
      -webkit-font-smoothing: antialiased;
    }
    h1 {
      font-size: 4rem;
    }
    img {
      max-width: 100%;
    }
    a {
      cursor: pointer;
      display: inline-flex;
      align-content: center;
      justify-content: center;
      color: inherit;
      text-decoration: none;
      &.icon {
        font-size: 2.6rem;
      }
    }
    p {
      font-size: 2.2rem;
    }
`;

export default GlobalStyles;
