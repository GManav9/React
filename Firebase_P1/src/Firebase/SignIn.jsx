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
    <div className="col-xl-3 col-6 m-auto">
      <h1>SignIn</h1>
      <input
        className="form-control mt-3"
        type="email"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="form-control mt-3"
        type="text"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="btn btn-success mt-3" onClick={handleSignIn}>
        Submit
      </button>
      <Link to={"/"}>
        <button className="btn btn-danger ms-3 mt-3">SignUp</button>
      </Link>
    </div>
  );
}
