import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { RootStore } from './storage';
import './styles/index.scss';
import { checkPolyfill } from './polyfill';
checkPolyfill();

ReactDOM.render(
  <Provider store={RootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
