import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import React, { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseconfig";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, email, password).then((res) => {
      navigate("/Dashboard", { replace: true });
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-xl-3 col-6 m-auto shadow-lg p-5">
        <h1 className="text-center">SignIn</h1>
        <input
          className="form-control mt-3"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="form-control mt-3"
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="btn btn-success mt-3 form-control"
          onClick={handleSignIn}
        >
          Sign-In
        </button>
        <p className="form-control text-center border-0 mt-3">
          Don't have an Account ?
          <Link to={"/"} className="ms-2">
            Sign-Up Here
          </Link>
        </p>
      </div>
    </div>
  );
}
