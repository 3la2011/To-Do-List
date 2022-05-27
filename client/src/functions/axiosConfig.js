import axios from "axios";
import { store } from "../redux/store";

const token = () =>
  store.getState().user.token || localStorage.getItem("token");

export const axiosConfiguration = () =>
  axios.create({
    baseURL: "http://localhost:4200",
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token(),
    },
  });

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
