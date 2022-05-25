// Redux
import { store } from "../redux/store";

// Reducers
import { loading, stopLoading } from "../redux/loadingReducer";
import { login } from "../redux/userReducer";

import { axiosConfig } from "./functions";

export const signup = async (data) => {
  store.dispatch(loading());

  if (
    data.username === "" ||
    data.password === "" ||
    data.repeat_password === ""
  )
    store.dispatch(stopLoading());

  axiosConfig
    .post("/user/signup", data)
    .then((res) => {
      const token = res.headers.authorization.split(" ")[1];
      store.dispatch(
        login({
          username: res.data.username,
          token: token,
        })
      );

      store.dispatch(stopLoading());
    })
    .catch((err) => {
      store.dispatch(stopLoading());
    });
};
