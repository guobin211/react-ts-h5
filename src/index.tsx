import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { reduxStore } from './redux-store';
import './styles/index.scss';
import { checkPolyfill } from './polyfill';
checkPolyfill();

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
