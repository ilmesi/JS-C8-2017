import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'
import { completeTodo } from '../actions/todos'

const TodoList = (props) => {
  const { dispatch, items } = props
  const onCompleteTodo = (id) => {dispatch(completeTodo(id))}
  return (
    <div>
      {
        items.map(item => (
          <Item
            key={item.id}
            onCompleteTodo={onCompleteTodo}
            { ...item }
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.todos.items
  }
}

export default connect(mapStateToProps)(TodoList);
