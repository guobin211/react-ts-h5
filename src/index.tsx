import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { reduxStore } from './redux-store';
import './styles/index.css';

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
