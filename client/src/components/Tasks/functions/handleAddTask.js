import { axiosConfig } from "../../../functions/functions";
import { store } from "../../../redux/store";
import { setTasks } from "../../../redux/tasksReducer";

export const handleAddTask = () => {
  axiosConfig
    .get("/tasks/add")
    .then((res) => {
      store.dispatch(setTasks(res.data.tasks));
    })
    .catch((err) => console.error(err));
};
