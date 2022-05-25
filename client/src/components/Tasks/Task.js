import { handleTaskClick } from "./functions/handleTaskClick";

const Task = (props) => (
  <div
    className="TaskTitle flex"
    id={props.task._id}
    onClick={(e) => handleTaskClick(e)}
  >
    {props.task.title}
  </div>
);

export default Task;
