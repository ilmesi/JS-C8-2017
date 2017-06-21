import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  const { loggedIn } = props
  return (
    <div className="navbar">
      { loggedIn ?
        <Link to="/logout" className="nav">Logout</Link> :
        <Link to="/login" className="nav">Login</Link>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.token !== ''
  }
}

export default connect(mapStateToProps)(Navigation);
