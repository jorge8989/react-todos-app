import React from 'react'
import _ from 'lodash';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './Reducers'
import { render } from 'react-dom';
import App from './components/App';
import { addTodo, completeTodo, deleteTodo, setVisibilityFilter, 
  toggleEditingState, VisibilityFilters, updateTodo, validateTodo } from './Actions'



let store = createStore(todoApp);

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(addTodo('Build an app with Redux'))
//store.dispatch(deleteTodo(3))
//store.dispatch(addTodo('Create todo app'))
store.dispatch(completeTodo(1))
store.dispatch(completeTodo(2))
store.dispatch(completeTodo(3))
store.dispatch(validateTodo('something'))
//store.dispatch(toggleEditingState(1))


//unsubscribe()

export default store

render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('app')
  
);
