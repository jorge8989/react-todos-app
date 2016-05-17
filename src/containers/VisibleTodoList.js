import { connect } from 'react-redux'
import { toggleTodo } from '../Actions'
import TodoList from '../components/TodoList'
import { completeTodo, deleteTodo, toggleEditingState } from '../Actions.js'

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
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
