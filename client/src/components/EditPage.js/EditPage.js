import React from "react";
import { useSelector } from "react-redux";
import "./EditPage.css";
import { useDispatch } from "react-redux";
import { unselectTask } from "../../redux/tasksReducer";
import { handleUpdateTask } from "./functions/handleUpdateTask";
import { handleDeleteTask } from "./functions/handleDeleteTask";

export const EditPage = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state);
  const selectedTask = tasks.tasks.filter(
    (elem) => elem._id === tasks.selectedTaskId
  )[0];

  return (
    <div className="EditPage flex col">
      <button
        className="closeEdit btn flex"
        onClick={() => dispatch(unselectTask())}
      >
        x
      </button>
      <textarea className="textarea flex" id="textareaTitle">
        {selectedTask.title}
      </textarea>

      <textarea className="textarea flex" id="textareaDescription">
        {selectedTask.description}
      </textarea>
      <div className="editBtns flex row">
        <button className="btn" id="save" onClick={(e) => handleUpdateTask(e)}>
          Save
        </button>
        <button
          className="btn"
          id="delete"
          onClick={(e) => handleDeleteTask(e)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
