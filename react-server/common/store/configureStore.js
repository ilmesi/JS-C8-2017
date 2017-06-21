import { createStore, applyMiddleware } from 'redux'
import { combineReducers, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (history, preloadedState) => {

  const middleware = [thunk, routerMiddleware(history)]

  let devTools = []
  if (typeof document !== 'undefined') {
    devTools = [ window.__REDUX_DEVTOOLS_EXTENSION__() ]
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      ...devTools
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
