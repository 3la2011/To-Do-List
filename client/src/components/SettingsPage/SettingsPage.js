// CSS
import "./SettingsPage.css";

// icons
import sun from "../../svgs/sun.svg";
import moon from "../../svgs/moon.svg";

// Libraries and Packages
import { useEffect, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Reducers
import { updateMode } from "../../redux/userReducer";
import { loading, stopLoading } from "../../redux/loadingReducer";
import { notify } from "../../redux/notificationsReducer";

// Functions
import { axiosConfig, url } from "../../functions/axiosConfig";
// import { switchMode } from "../../functions/functions";

export const SettingsPage = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.user);

  const ChangeMode = (data) => {
    dispatch(loading());
    axiosConfig
      .put(url + "/api/user/update/mode", data, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(updateMode(mode === "light" ? "dark" : "light"));
        dispatch(stopLoading());
        dispatch(
          notify({
            status: "success",
            msg: `Mode changed: ${mode === "light" ? "dark" : "light"}`,
          })
        );
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(
          notify({
            status: "error",
            msg: err.response.data.errors,
          })
        );
      });
  };
  return (
    <div className="SettingsPage">
      <h4>Settings</h4>
      <figure>
        <figcaption>Mode</figcaption>
        <button
          className={`mode ${mode === "light" ? "dark" : "light"}`}
          onClick={() =>
            ChangeMode({ mode: mode === "light" ? "dark" : "light" })
          }
        >
          <img
            src={mode === "light" ? moon : sun}
            alt="mode"
            className="mode"
          />
        </button>
      </figure>
      {/* <div className="switch">
        <label htmlFor="mode">Mode</label>
        <input
          id="mode"
          type="checkbox"
          onChange={() => console.log("changed")}
        />
        <span class="slider round"></span>
      </div> */}
    </div>
  );
};
