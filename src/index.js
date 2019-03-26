import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/redux/store';
import './js/appLogic/internalization/i18n';
import { AppContainer } from './js/redux/containers';
import './style/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
