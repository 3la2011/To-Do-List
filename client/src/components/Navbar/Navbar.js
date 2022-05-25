// Libraries and Packages
import { Link } from "react-router-dom";

// style
import "./Navbar.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userReducer";

export function Navbar() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  console.log(isLoggedIn);

  return (
    <nav>
      <h1>To-Do-List</h1>
      {isLoggedIn ? (
        <button className="btn logout" onClick={() => dispatch(logout())}>
          Logout
        </button>
      ) : (
        ""
      )}
    </nav>
  );
}
