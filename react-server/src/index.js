import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import Root from './components/Root'
import configureStore from './store/configureStore'

const history = createHistory()
const store = configureStore(history)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
