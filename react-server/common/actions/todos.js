import fetch from 'isomorphic-fetch'

export const UPDATE_TEXT = 'UPDATE_TEXT'
export const CREATE_TODO = 'CREATE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export const updateText = (text) => ({
  type: UPDATE_TEXT,
  text
})

export const createTodo = (text) => ({
  type: CREATE_TODO,
  text
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
})

export const requestTodos = () => ({
  type: REQUEST_TODOS
})

export const receiveTodos = (items) => ({
  type: RECEIVE_TODOS,
  items
})

export const fetchTodos = () => {
  let url = 'http://localhost:3000/tasks'
  let options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return fetch(url, options).then(response => response.json())
}

export const loadTodos = () => dispatch => {
  dispatch(requestTodos())
  fetchTodos()
    .then(json => dispatch(receiveTodos(json)))
}
