import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import auth from './auth'
import todos from './todos'

const rootReducer = combineReducers({
  routing,
  auth,
  todos
})

export default rootReducer
