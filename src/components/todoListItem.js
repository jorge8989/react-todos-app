import React from "react";
export default class TodoListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false
    }
  }
  render() {
    return(
      <tr>
        <td>{this.props.task}</td>
        <td>{this.props.isCompleted ? 'Completed' : 'Not Completed'}</td>
        {this.renderActionSection()}
      </tr>
    )
  }
  
  onEditClick() {
    this.setState({ isEditing: true })
  }
  
  onCancelCLick() {
    this.setState({ isEditing: false })
  }
  
  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button class="btn btn-primary">Save</button>
          <button class="btn btn-default"onClick={this.onCancelCLick.bind(this)}>Cancel</button>
        </td>
      )
    } else {
      return (
        <td>
          <button class="btn btn-primary"onClick={this.onEditClick.bind(this)}>Edit</button>
          <button class="btn btn-danger">Delete</button>
        </td>
      )
    }
  }
  
}
