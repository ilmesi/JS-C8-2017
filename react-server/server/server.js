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

import { fetchTodos } from '../common/actions/todos'

const app = new Express()
const port = 8080

// Serve static generated files
app.use(Express.static(path.join(__dirname, '..', 'build')));

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

const handleRender = (req, res) => {
  fetchTodos().then(todos => {
    const preloadedState = {
      todos: {
        items: todos
      }
    }
    const history = createHistory(req.url)
    const store = configureStore(history, preloadedState)
    // Render the component to a string
    const html = renderToString(
      <Root store={store} history={history} />
    )
    const finalState = store.getState()
    res.send(renderFullPage(html, finalState))
  })
}

// This is fired every time the server side receives a request
app.use(handleRender)

const renderFullPage = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <title>Aloha Server-side!</title>
        <link rel="stylesheet" type="text/css" href="/bundle.css" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/bundle.js"></script>
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
