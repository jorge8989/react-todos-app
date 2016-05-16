import React, { PropTypes } from 'react'

const Todo = ({completed, text, onClick, onDeleteClick }) => (
  <tr>
    <td
      style={{
        color: completed ? 'green' : 'red',
        cursor: 'pointer' 
     }}
     onClick={onClick}
    >
    {text}
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
