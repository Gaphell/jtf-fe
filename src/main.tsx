import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    line-height: 1.5;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: inherit;
    line-height: inherit;
    margin: 0;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`

root.render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>
);
