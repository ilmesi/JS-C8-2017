export const UPDATE_TEXT = 'UPDATE_TEXT'
export const CREATE_TODO = 'CREATE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

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
