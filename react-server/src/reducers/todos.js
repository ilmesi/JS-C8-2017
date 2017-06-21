import * as ActionTypes from '../actions/todos'

const initialState = {
  items: [],
  text: '',
  isFetching: false
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_TODOS:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        items: action.items
      }
    case ActionTypes.UPDATE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ActionTypes.COMPLETE_TODO:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id !== action.id) { return item }
          return {
            ...item,
            done: true
          }
        })
      }
    case ActionTypes.CREATE_TODO:
      return {
        items: state.items.concat({
          id: state.items.length,
          text: action.text,
          done: false
        }),
        text: ''
      }
    default:
      return state
  }
}

export default todosReducer
