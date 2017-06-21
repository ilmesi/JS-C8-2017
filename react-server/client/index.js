import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import Root from '../common/components/Root'
import configureStore from '../common/store/configureStore'
import css from '../assets/base.css';

const preloadedState = window.__PRELOADED_STATE__
const history = createHistory()
const store = configureStore(history, preloadedState)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
