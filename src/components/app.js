import React from "react";
import Todos from "./todosList";
import CreateTodo from "./createTodos";

const todos = [
  {
    id: 1,
    task: 'practice react',
    isCompleted: true
  },
  {
    id: 2,
    task: 'Eat Dinner',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Deliver Job',
    isCompleted: false
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos
    }
    
  }
  render() {
    return (
      <div class="container">
        <h1>Todo List</h1>
        <CreateTodo />
        <br/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}
