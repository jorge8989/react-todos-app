import React from "react";
import Todos from "./todosList";
import _ from 'lodash';
import CreateTodo from "./createTodos";

const todos = [
  {
    task: 'practice react',
    isCompleted: true
  },
  {
    task: 'Eat Dinner',
    isCompleted: false
  },
  {
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
        <h1>Todo App</h1>
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <br/>
        <Todos todos={this.state.todos} toggleTask={this.toggleTask.bind(this)}/>
      </div>
    );
  }
  
  toggleTask(task) {
    task.isCompleted = !task.isCompleted
    this.setState({ todos: this.state.todos })
  }
  
  
  
  createTask(task) {
     this.state.todos.push({task: task, isCompleted: false});
     this.setState({ todos: this.state.todos });
  }
  
}
