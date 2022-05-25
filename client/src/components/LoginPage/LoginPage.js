// CSS
import "./LoginPage.css";

// Functions
import { qsiv } from "../../functions/functions";
import { loginUser } from "../../functions/loginUser";
import { signup } from "../../functions/signUp";

export function LoginPage() {
  return (
    <div className="LoginPage flex">
      <form className="LoginForm form">
        <fieldset className="flex">
          <legend>Login</legend>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="password" />
          <button
            onClick={(e) => {
              e.preventDefault();
              loginUser({
                username: qsiv(".LoginForm .username"),
                password: qsiv(".LoginForm .password"),
              });
            }}
          >
            Login
          </button>
        </fieldset>
      </form>
      <form className="signupForm form">
        <fieldset className="flex">
          <legend>Sign Up</legend>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="password" />
          <label htmlFor="repeat_password">Repeat_Password</label>
          <input
            type="password"
            name="repeat_password"
            className="repeat_password"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              signup({
                username: qsiv(".signupForm .username"),
                password: qsiv(".signupForm .password"),
                repeat_password: qsiv(".signupForm .repeat_password"),
              });
            }}
          >
            Sign up
          </button>
        </fieldset>
      </form>
    </div>
  );
}
