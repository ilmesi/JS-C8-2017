import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth, updateUser, updatePassword } from '../actions/auth'

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)
  }
  handleSubmit(event) {
    const { dispatch, username, password } = this.props
    event.preventDefault()
    dispatch(auth(username, password))
  }
  handleUserChange(event) {
    const { dispatch } = this.props
    dispatch(updateUser(event.target.value))
  }
  handlePassChange(event) {
    const { dispatch } = this.props
    dispatch(updatePassword(event.target.value))
  }
  render() {
    const { username, password, isFetching } = this.props
    return (
      <div>
        Login
        <form onSubmit={this.handleSubmit}>
          <input
            value={username}
            onChange={this.handleUserChange}
            type="text"
            name="username"
            placeholder="Ingrese su username"
          />
          <input
            value={password}
            onChange={this.handlePassChange}
            type="password"
            name="password"
            placeholder="Ingrese su password"
          />
          { isFetching ? 'Procesando...' : <input type="submit" value="Login" /> }
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.auth.isFetching,
    username: state.auth.username,
    password: state.auth.password
  }
}

export default connect(mapStateToProps)(Login);
