import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './App.styles';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById('root')
);