import React, { PropTypes } from 'react'
import Todo from './Todo'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const TodoList = ({ todos, onTodoClick, onDeleteClick, onEditClick, validateEditedTask, updateTask }) => (
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
          validateEditedTask={validateEditedTask}
          updateTask={updateTask}
          {...todo}
        />
      )}
      <tr>
      </tr>
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
