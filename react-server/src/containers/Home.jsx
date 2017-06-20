import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Home extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <div>
        Home
        <Link to="/login">Login</Link>
        {children}
      </div>
    )
  }
}

export default Home
