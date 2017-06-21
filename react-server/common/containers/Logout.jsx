import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestLogout } from '../actions/auth'

class Logout extends Component {
  componentWillMount() {
    const { logout } = this.props
    logout()
  }
  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logout: () => {dispatch(requestLogout())}
  }
}

export default connect(null, mapDispatchToProps)(Logout);
