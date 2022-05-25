// Libraries and Packages
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// CSS
import "./App.css";

// components
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

// Pages
import { HomePage } from "./components/HomePage/HomePage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { LoadingPage } from "./components/LoadingPage/LoadingPage";

// Reducers Actions
import { loading as loadingReducer, stopLoading } from "./redux/loadingReducer";
import { login, logout } from "./redux/userReducer";
import { setTasks } from "./redux/tasksReducer";
import { axiosConfig } from "./functions/functions";

function App() {
  // states variables and functions
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);
  const { user } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadingReducer());
    axiosConfig
      .get("/user")
      .then(
        (res) => (
          res.data.verified
            ? (dispatch(
                login({
                  username: res.data.username,
                  token: localStorage.getItem("token"),
                })
              ),
              dispatch(setTasks(res.data.tasks)))
            : dispatch(logout()),
          dispatch(stopLoading())
        )
      )
      .catch((err) => {
        dispatch(logout());
        dispatch(stopLoading());
      });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Loading page */}
        {loading.isLoading ? <LoadingPage /> : ""}

        <Navbar />
        <div className="PageWrapper">
          <Routes>
            <Route
              exact
              path="/"
              element={
                user.isLoggedIn ? <HomePage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/login"
              element={user.isLoggedIn ? <Navigate to="/" /> : <LoginPage />}
            />

            <Route path="*" element="404, Page Not Found" />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
