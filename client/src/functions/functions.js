import axios from "axios";

// query selector and query selector all
export function qs(elem) {
  return document.querySelector(elem);
}

export function qsa(elem) {
  return document.querySelectorAll(elem);
}

// query selector with specific options
export function qsiv(elem) {
  return qs(elem).value;
}

export function qsac(elem, classs) {
  return qs(elem).classList.add(classs);
}

export function qsrc(elem, classs) {
  return qs(elem).classList.remove(classs);
}

export const axiosConfig = axios.create({
  baseURL: "http://localhost:4200",
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
