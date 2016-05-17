import React, { PropTypes } from 'react'

const todoTextOrInput = ({ text, editing }) => {
    let editInput;
    
    if ( editing ) {
      return(
        <input type="text" 
        defaultValue={text}
        ref={node => { editInput = node } }
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

const Todo = ({editing, completed, text, onClick, onDeleteClick, onEditClick }) => (
  <tr>
    <td
      style={{
        color: completed ? 'green' : 'red',
        cursor: 'pointer' 
     }}
     onClick={  editing ? null : onClick  }
    >
      { todoTextOrInput({text, editing, onClick}) }
    </td>
    <td>
      <button class="btn btn-primary" onClick={onEditClick}>Edit</button>
      
      <button class="btn btn-danger" onClick={onDeleteClick}>
        delete
      </button>
    </td>
  </tr>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
