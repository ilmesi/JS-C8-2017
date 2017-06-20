import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CreateForm from '../containers/CreateForm'
import TodoList from '../containers/TodoList'

const Home = (props) => (
  <div className="container">
    <div className="header">
      <h2>TODO List</h2>
      <CreateForm />
      <TodoList />
    </div>
  </div>
)
/*
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
}*/

export default Home
