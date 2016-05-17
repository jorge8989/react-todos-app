import _ from 'lodash';
import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, 
  TOGGLE_EDITING_STATE, UPDATE_TODO, VisibilityFilters } from './Actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length+1,
          text: action.text,
          completed: false,
          editing: false
        }
      ]
    case COMPLETE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    case TOGGLE_EDITING_STATE:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            editing: !todo.editing
          })
        }
        return todo;
      })
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            text: action.newtext,
            editing: false
          })
        }
        return todo;  
      })
    case DELETE_TODO:
      return _.without(state, _.find(state, {id: action.id}))
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
