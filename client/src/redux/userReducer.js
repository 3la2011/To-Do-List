// Libraries and Packages
import { createSlice } from "@reduxjs/toolkit";

// Functions
import { setCookie, deleteCookies } from "../functions/Cookies";
import { switchMode } from "../functions/functions";

const initialState = {
  isLoggedIn: false,
  username: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { username, token } = action.payload;
      setCookie(["username", username], ["token", token]);
      return {
        isLoggedIn: true,
        username: username,
        token: token,
      };
    },
    logout: () => {
      deleteCookies();
      return { initialState };
    },
  },
});

export const { login, logout, updateMode } = userSlice.actions;
export default userSlice.reducer;
