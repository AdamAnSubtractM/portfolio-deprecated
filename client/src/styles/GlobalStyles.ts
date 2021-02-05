import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
      font-size: 62.5%;
    }
    body {
      font-size: 1.6rem;
      min-height: 100vh;
    }
    button {
      background: transparent;
      border: none;
    }
`;

export default GlobalStyles;
