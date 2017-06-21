import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { loadTodos } from '../actions/todos'

class TodoList extends Component {
  componentWillMount() {
    const { doLoadTodos } = this.props
    doLoadTodos()
  }
  render() {
    const { items } = this.props
    return (
      <div>
        {
          items.map(item => (
            <Item key={item.id} { ...item } />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todos.items
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    doLoadTodos: () => {dispatch(loadTodos())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
