/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import createHistory from 'history/createMemoryHistory'

import configureStore from '../common/store/configureStore'
import Root from '../common/components/Root'

const app = new Express()
const port = 8080

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

const handleRender = (req, res) => {
  const preloadedState = {}
  const history = createHistory(req.url)
  const store = configureStore(preloadedState)
  // Render the component to a string
  const html = renderToString(
    <Root store={store} history={history} />
  )
  const finalState = store.getState()
  res.send(renderFullPage(html, finalState))
  /*
  fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    const params = 0
    const counter = parseInt(params.counter, 10) || apiResult || 0

    // Compile an initial state
    const preloadedState = { counter }

    // Create a new Redux store instance
    const store = configureStore(preloadedState)

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    // Grab the initial state from our Redux store
    const finalState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState))
  })
  */
}

// This is fired every time the server side receives a request
app.use(handleRender)

const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
