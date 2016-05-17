import React, { PropTypes } from 'react'

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

const actionsColumn = ({ editing, id, onEditClick, onDeleteClick, onSaveClick }) => {
  if ( editing ) {
    return(
      <div>
        <button class="btn btn-primary" onClick={() => onSaveClick(id, editInput.value)}>Save</button>
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

const Todo = ({editing, id, completed, text, onClick, onDeleteClick, onEditClick, onSaveClick }) => (
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
      { actionsColumn({ editing, id, onEditClick, onDeleteClick, onSaveClick })}
    </td>
  </tr>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
