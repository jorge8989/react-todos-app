import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './Reducers'
import { render } from 'react-dom';
import App from './components/App';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './Actions'



let store = createStore(todoApp);

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

unsubscribe()



render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('app')
  
);
