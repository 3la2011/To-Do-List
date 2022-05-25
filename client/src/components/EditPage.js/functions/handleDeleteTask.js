import { store } from "../../../redux/store";
import { setTasks } from "../../../redux/tasksReducer";
import { axiosConfig } from "../../../functions/functions";

export const handleDeleteTask = (e) => {
  const id = store.getState().tasks.selectedTaskId;
  console.log(id);
  axiosConfig
    .delete(`/tasks/delete/${id}`)
    .then((res) => {
      store.dispatch(setTasks(res.data.tasks));
    })
    .catch((err) => console.error(err));
};
