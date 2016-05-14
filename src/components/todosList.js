import React from "react";
import TodoListItem from "./todoListItem";
import _ from 'lodash';

export default class Todos extends React.Component {
  
  
  renderItems() {
    const props = _.omit(this.props, 'todos');
    
    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} 
      handleToggle={this.handleToggle.bind(this)} handleDelete={this.handleDelete.bind(this)} {...todo}/>)
  }
  
  handleToggle(task) {
    const foundTask = _.find(this.props.todos, {task: task})
    this.props.toggleTask(foundTask)
  }
  
  handleDelete(task) {
    const foundTask = _.find(this.props.todos, {task: task})
    this.props.deleteTask(foundTask)
  }
  
  render() {
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
      </div>
    );
  }
}
