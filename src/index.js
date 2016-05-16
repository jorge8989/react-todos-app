import React from 'react'
import _ from 'lodash';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './Reducers'
import { render } from 'react-dom';
import App from './components/App';
import { addTodo, completeTodo, deleteTodo, setVisibilityFilter, VisibilityFilters } from './Actions'



let store = createStore(todoApp);

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions', 1))
store.dispatch(addTodo('Learn about reducers', 2))
store.dispatch(addTodo('Learn about store', 3))
store.dispatch(deleteTodo(3))
store.dispatch(addTodo('Create todo app', 4))
store.dispatch(completeTodo(4))


unsubscribe()



render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('app')
  
);
