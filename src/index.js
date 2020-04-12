import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from '@/route'
import '@/assets/base.scss'
import '@/assets/common.scss'
import './index.css';
import configureStore from './redux/store';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)
serviceWorker.unregister();