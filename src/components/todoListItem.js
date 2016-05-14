import React from "react";
import _ from 'lodash';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }
  render() {
    return(
      <tr>
        { this.renderTaskSection() }
        { this.renderActionSection() }
      </tr>
    )
  }
  
  onEditClick() {
    this.setState({ isEditing: true })
  }
  
  onCancelCLick() {
    this.setState({ isEditing: false })
  }
  
  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }
    return (
      <td style={ taskStyle } onClick={this.props.handleToggle.bind(this, task)}>{ task }</td>
    );
  }
  
  renderActionSection() {
    const { task } = this.props;
    if (this.state.isEditing) {
      return (
        <td>
          <button class="btn btn-primary">Save</button>
          <button class="btn btn-default" onClick={this.onCancelCLick.bind(this)}>Cancel</button>
        </td>
      )
    } else {
      return (
        <td>
          <button class="btn btn-primary"onClick={this.onEditClick.bind(this)}>Edit</button>
          <button class="btn btn-danger" onClick={this.props.handleDelete.bind(this, task)}>Delete</button>
        </td>
      )
    }
  }
  
}
