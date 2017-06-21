import React from 'react'
import CreateForm from '../containers/CreateForm'
import TodoList from '../containers/TodoList'
import Navigation from '../containers/Navigation'

export default (props) => (
  <div className="container">
    <Navigation />
    <div className="header">
      <h2>TODO List</h2>
      <CreateForm />
      <TodoList />
    </div>
  </div>
)
