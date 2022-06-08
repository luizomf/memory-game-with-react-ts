import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Grid } from './components/Grid';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid />
    </ThemeProvider>
  </React.StrictMode>,
);
