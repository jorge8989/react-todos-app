import React from 'react';

export default class CreateTodo extends React.Component {
  handleCreate(event) {
    event.preventDefault();
    this.props.createTask(this.refs.taskNameInput.value);
    this.refs.taskNameInput.value = '';
  }
  
  render() {
    return(
      <form class="form-inline" onSubmit={this.handleCreate.bind(this)}>
        <div clas="form-group">
          <input type="text" placeholder="what do i need to do" class="form-control" ref="taskNameInput"/>
          <button class="btn btn-success">create</button>
        </div>
      </form>
    );
  }
}
