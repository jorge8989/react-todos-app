import React, { PropTypes } from 'react'

const todoTextOrInput = ({ text, editing }) => {
    if ( editing ) {
      return(
        <input type="text" value={ text } class="form-control"/>
      )
    } else {
      return( 
        <span>
          { text }
        </span>
       )
    }
}

const Todo = ({editing, completed, text, onClick, onDeleteClick }) => (
  <tr>
    <td
      style={{
        color: completed ? 'green' : 'red',
        cursor: 'pointer' 
     }}
     onClick={onClick}
    >
      { todoTextOrInput({text, editing}) }
    </td>
    <td>
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
