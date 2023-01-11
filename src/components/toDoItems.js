import React from 'react';

const ToDoItems = (props) => {
  const { items, deleteTask } = props;

  const allItems = items.length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="id">{item.id}</span>
          <span className="task">{item.task}</span>
          <span className="time">{item.time}</span>
          <span className="action icon" onClick={() => deleteTask(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>no tasks available</p>
  );
  return (
    <div className="list">
      <div className="list-titles">
        <span className="id title">ID</span>
        <span className="task title">Task</span>
        <span className="time title">Time</span>
        <span className="action title">Act</span>
      </div>
      {allItems}
    </div>
  );
};

export default ToDoItems;
