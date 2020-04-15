import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from '@/route'
import '@/assets/base.scss'
import '@/assets/common.scss'
import './index.css'
import configureStore from './redux/store'
import * as serviceWorker from './serviceWorker'
import { EventEmitter } from 'events'
const emitter = new EventEmitter()
emitter.setMaxListeners(150)
React.$emitter = emitter
ReactDOM.render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)
serviceWorker.unregister();