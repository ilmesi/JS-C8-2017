import React from 'react';
import { connect } from 'react-redux'
import { completeTodo } from '../actions/todos'

const Item = (props) => {
  const { onCompleteTodo, id, text, done } = props
  return (
    <div className={"row item " + (done ? "closed" : "open")}>
      <div className="six columns description">
        <div className="">{text}</div>
      </div>
      <div className="six columns actions">
        <button
          onClick={onCompleteTodo}
          className="button-primary"
          disabled={done}
        >Terminar</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCompleteTodo: () => {dispatch(completeTodo(props.id))}
  }
}

export default connect(null, mapDispatchToProps)(Item);
