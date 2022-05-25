// Redux
import { store } from "../redux/store";

// Reducers
import { loading, stopLoading } from "../redux/loadingReducer";
import { login } from "../redux/userReducer";
import { setTasks } from "../redux/tasksReducer";
import { axiosConfig } from "./functions";

export const loginUser = async (data) => {
  store.dispatch(loading());
  if (data.username === "" || data.password === "") {
    store.dispatch(stopLoading());
  }
  axiosConfig
    .post("/user/login", data)
    .then((res) => {
      try {
        const token = res.headers.authorization.split(" ")[1];
        store.dispatch(
          login({
            token: token,
            username: res.data.username,
            mode: res.data.mode || true,
          })
        );
        store.dispatch(setTasks(res.data.tasks));
        store.dispatch(stopLoading());
      } catch (err) {
        store.dispatch(stopLoading());
      }
    })
    .catch((err) => {
      store.dispatch(stopLoading());
    });
  return;
};
