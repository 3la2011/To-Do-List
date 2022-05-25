import React from "react";
import Task from "./Task";
import "./Tasks.css";
import { useSelector } from "react-redux";
import { handleAddTask } from "./functions/handleAddTask";

export const Tasks = () => {
  const { tasks } = useSelector((state) => state.tasks);
  console.log("tasks from task.js, line 9", tasks);
  return (
    <div className="Tasks flex">
      {tasks ? (
        tasks.length >= 2 ? (
          tasks.map((task) => <Task task={task} />)
        ) : tasks.length === 1 ? (
          <Task task={tasks[0]} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <button className="addTaskBtn" onClick={() => handleAddTask()}>
        +
      </button>
    </div>
  );
};

// export default Tasks;
