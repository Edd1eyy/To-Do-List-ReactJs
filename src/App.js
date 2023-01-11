import React, { Component } from 'react';
import AddItem from './components/addItem';
import ToDoItems from './components/toDoItems';
class App extends Component {
  state = {
    tasks: [],
  };

  updateTasksId = () => {
    this.state.tasks.forEach((task, i) => {
      task.id = i + 1;
    });
  };

  newTask = (task) => {
    let newList = this.state.tasks;
    this.state.tasks.push(task);
    this.updateTasksId();
    this.setState({ tasks: newList });
  };

  deleteTask = (id) => {
    let tasks = this.state.tasks;
    let taskToDeleteId = tasks.findIndex((item) => item.id === id);
    tasks.splice(taskToDeleteId, 1);
    this.updateTasksId();
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="title">My To Do List</h1>
        <ToDoItems items={this.state.tasks} deleteTask={this.deleteTask} />
        <AddItem newTask={this.newTask} />
      </div>
    );
  }
}
export default App;
