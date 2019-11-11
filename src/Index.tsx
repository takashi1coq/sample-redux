import * as React from 'react'
import { render } from 'react-dom'
import configureStore from './store'
import { Provider } from 'react-redux'
import { Routes } from './Routes'

const store = configureStore()

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
)
