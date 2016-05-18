import { connect } from 'react-redux'
import { toggleTodo } from '../Actions'
import TodoList from '../components/TodoList'
import { completeTodo, deleteTodo, toggleEditingState, updateTodo, validateTodo } from '../Actions.js'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => { 
      dispatch(completeTodo(id))
    },
    onEditClick: (id) => {
      dispatch(toggleEditingState(id))
    },
    onDeleteClick: (id) => {
      dispatch(deleteTodo(id))
    },
    validateEditedTask: (newtext) => {
      dispatch(validateTodo(newtext))
    },
    updateTask: (id, newtext) => {
      dispatch(updateTask(id, newtext))  
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
