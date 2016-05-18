import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../Actions';
import store from '../index.js'


const onSaveClickButton = (id, newtext, validateEditedTask) => {
  validateEditedTask(newtext)
  let errors = store.getState().errors
  if (errors === null) {
    store.dispatch(updateTodo(id, newtext))
  }
}

let editInput;

const todoTextOrInput = ({ text, editing }) => {
    if ( editing ) {
      return(
        <input type="text" 
        defaultValue={text}
        ref={(ref) => { editInput = ref }}
        class="form-control"/>
      )
    } else {
      return( 
        <span>
          { text }
        </span>
       )
    }
}

const actionsColumn = ({ editing, id, onEditClick, onDeleteClick, validateEditedTask }) => {
  if ( editing ) {
    return(
      <div>
        <button class="btn btn-primary" onClick={() => onSaveClickButton( id, editInput.value, validateEditedTask )} >Save</button>
        <button class="btn btn-default" onClick={onEditClick}>Cancel</button>
      </div>
    ) 
  } else {
      return(
        <div>
          <button class="btn btn-primary" onClick={onEditClick}>Edit</button>
          <button class="btn btn-danger" onClick={onDeleteClick}>delete</button>
        </div>
      )
    }
 }

const Todo = ({editing, id, completed, text, onClick, onDeleteClick, onEditClick, validateEditedTask}) => (
  <tr>
    <td
      style={{
        color: completed ? 'green' : 'red',
        cursor: 'pointer' 
     }}
     onClick={  editing ? null : onClick  }
    >
      { todoTextOrInput({ text, editing }) }
    </td>
    <td>
      { actionsColumn({ editing, id, onEditClick, onDeleteClick, validateEditedTask })}
    </td>
  </tr>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  validateEditedTask: PropTypes.func.isRequired
}

export default Todo
