import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from './AddTodo';

const App = () => (
  <div class="container">
    <h1>Todo List</h1>
    <AddTodo/>
    <VisibleTodoList />
  </div>
)

export default App
