import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth, updateUser, updatePassword } from '../actions/auth'

const Login = (props) => {
  const { dispatch, username, password, isFetching } = props
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(auth(username, password))
  }
  const handleUserChange = (event) => { dispatch(updateUser(event.target.value)) }
  const handlePassChange = (event) => { dispatch(updatePassword(event.target.value)) }

  return (
    <div className="container">
      <div className="header">
        <h3>TODO list</h3>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="row">
            <div className="three columns" />
            <div className="six columns">
              <input
                value={username}
                onChange={handleUserChange}
                type="text"
                name="username"
                placeholder="Ingrese su username"
              />
              <input
                value={password}
                onChange={handlePassChange}
                type="password"
                name="password"
                placeholder="Ingrese su password"
              />
              { isFetching ?
                'Procesando...' :
                <input className="button-primary" type="submit" value="Login" />
              }
            </div>
            <div className="three columns" />
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.auth.isFetching,
    username: state.auth.username,
    password: state.auth.password
  }
}

export default connect(mapStateToProps)(Login);
