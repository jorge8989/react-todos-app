import React from "react";
import TodoListItem from "./todoListItem";
import _ from 'lodash';

export default class Todos extends React.Component {
  renderItems() {
    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} />)
  }
  render() {
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Task</th>
              <th>State</th>
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
