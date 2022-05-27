import { qsiv } from "../../../functions/functions";
import { store } from "../../../redux/store";
import { axiosConfiguration } from "../../../functions/axiosConfig";
import { setTasks } from "../../../redux/tasksReducer";

export const handleUpdateTask = (e) => {
  const id = store.getState().tasks.selectedTaskId;
  const title = qsiv("#textareaTitle");
  const description = qsiv("#textareaDescription");
  const axiosConfig = axiosConfiguration();

  axiosConfig
    .put("/tasks/update", {
      taskId: id,
      title: title,
      description: description,
    })
    .then((res) => {
      store.dispatch(setTasks(res.data.tasks));
    })
    .catch((err) => console.error(err));
};
