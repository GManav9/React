import { useState } from "react";
import "./login.css";
function Login_signup() {
  const [state, setState] = useState(true);

  return (
    <div className="row d-flex justify-content-center align-items-center">
      {state == true ? (
        <div class="login-card col-4">
          <h2>Login-Page</h2>
          <form onsubmit="handleSubmit(event)">
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Enter your Name"
              required
            />
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
            <button className="bt mt-3 form-control">
              Log-In
            </button>
            <p
              className="mt-3"
              onClick={() => {
                setState(false);
              }}
            >
              You Dont't Have A Account ? Create New
            </p>
          </form>
        </div>
      ) : (
        <div class="login-card col-4">
          <h2>Sign-Up Page</h2>
          <form onsubmit="handleSubmit(event)">
            <input
              type="text"
              class="form-control"
              id="text"
              placeholder="Enter your UserName"
              required
            />
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your E-mail"
              required
            />
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
              required
              />
              <button className="bt mt-3 form-control">SignUp</button>
            <p
              className="mt-3"
              onClick={() => {
                setState(true);
              }}
            >
              Have A Account ? Log-In
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login_signup;
