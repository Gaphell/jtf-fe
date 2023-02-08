import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { createGlobalStyle } from "styled-components";

import background from './assets/images/background.jpg';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  body {
    font-family: inherit;
    line-height: inherit;
    margin: 0;
    background-image: linear-gradient(to bottom, rgba(256, 256, 256, 0.98), rgba(256, 256, 256, 0.92)), url('${background}');
    background-size: contain;
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
