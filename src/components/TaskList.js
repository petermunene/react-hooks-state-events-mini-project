import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          category={task.category}
          text={task.text}
          handleClick={() => onDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
