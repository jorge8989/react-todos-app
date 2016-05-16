import React, { PropTypes } from 'react'

const Todo = ({completed, text }) => (
  <tr>
    <td
      style={{
        color: completed ? 'green' : 'red',
        cursor: 'pointer' 
     }}
    >
    {text}
    </td>
    <td>
      <button class="btn btn-danger">
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
