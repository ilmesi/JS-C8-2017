import { push } from 'react-router-redux'

export const REQUEST_AUTH = 'REQUEST_AUTH'
export const RECEIVE_AUTH = 'RECEIVE_AUTH'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGOUT = 'LOGOUT'

export const requestAuth = () => ({
  type: REQUEST_AUTH
})

export const receiveAuth = (json) => ({
  type: RECEIVE_AUTH,
  response: json
})

export const updateUser = (username) => ({
  type: UPDATE_USER,
  username
})

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  password
})

export const doLogout = () => ({
  type: LOGOUT
})

export const requestLogout = () => dispatch => {
  dispatch(doLogout())
  dispatch(push('/'))
}

export const auth = (user, password) => dispatch => {
  dispatch(requestAuth())
  return fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, password })
    })
    .then(response => response.json())
    .then(json => dispatch(receiveAuth(json)))
    .then(() => dispatch(push('/')))
}
