import React from 'react';

export default class CreateTodo extends React.Component {
  render() {
    return(
      <form class="form-inline">
        <div clas="form-group">
          <input type="text" placeholder="what do i need to do" class="form-control"/>
          <button class="btn btn-success">create</button>
        </div>
      </form>
    );
  }
}
