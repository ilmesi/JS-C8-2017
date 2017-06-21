import React from 'react';
import { connect } from 'react-redux'
import { updateText, createTodo } from '../actions/todos'

const CreateForm = (props) => {
  const { dispatch, text } = props
  const onChange = (event) => dispatch(updateText(event.target.value))
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(createTodo(text))
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="ten columns">
          <label htmlFor="new-todo">Ingrese una tarea</label>
          <input
            type="text"
            id="new-todo"
            placeholder="Hacer compra del mercado"
            className="u-full-width"
            value={text}
            onChange={onChange}
          />
        </div>
        <div className="two columns">
          <button
            className="button-primary"
            type="submit"
            value="submit"
          >Crear</button>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.todos.text
  }
}

export default connect(mapStateToProps)(CreateForm);
