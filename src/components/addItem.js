import React, { Component } from 'react';
class AddItem extends Component {
  state = {
    id: 0,
    task: '',
    time: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  addTask = (e) => {
    e.preventDefault();
    if (e.target.task.value === '') {
      return false;
    } else {
      this.props.newTask(this.state);
      this.setState({
        id: 0,
        task: '',
        time: '',
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input
            type="text"
            placeholder="enter task..."
            id="task"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <input
            type="time"
            id="time"
            onChange={this.handleChange}
            value={this.state.time}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default AddItem;
