import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { ApolloProvider } from '@apollo/client';
import {client} from './App'


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


