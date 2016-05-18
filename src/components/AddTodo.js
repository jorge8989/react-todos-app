import React from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <form class="form-inline" onSubmit={(event) => {
      event.preventDefault();
      dispatch(addTodo(input.value));
      input.value = '';
    }}>
     <div class="form-group">
        <input ref={ ref => { input = ref } } class="form-control"/>
        <button class="btn btn-primary">
          Add Todo
        </button>
      </div>
    </form>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo;
