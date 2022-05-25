import { store } from "../../../redux/store";
import { selectTask } from "../../../redux/tasksReducer";

export const handleTaskClick = (e) => {
  store.dispatch(selectTask(e.target.id));
};
