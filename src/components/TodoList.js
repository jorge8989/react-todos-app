import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onDeleteClick, onEditClick, onSaveClick }) => (
  <table class="table table-striped">
    <thead>
      <tr>
        <th>tasks</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          onClick={() => onTodoClick(todo.id)}
          onDeleteClick={() => onDeleteClick(todo.id)}
          onEditClick={() => onEditClick(todo.id)}
          onSaveClick={onSaveClick}
          {...todo}
        />
      )}
    </tbody>
  </table>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    editing: PropTypes.bool.isRequired
  }).isRequired).isRequired,
}

export default TodoList
