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


export const loadTodos = () => dispatch => {
  dispatch(requestTodos())
  return fetch('http://localhost:3000/tasks', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
}
