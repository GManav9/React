import React, { useState } from "react";
import { auth, db } from "../../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [doc, setDoc] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), { name, email });
      navigate("/signIn");
      // setName("");
      // setEmail("");
      // setPassword("");
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-xl-3 col-6 m-auto shadow-lg p-5">
        <h1 className="text-center">SignUp</h1>
        <input
          className="form-control mt-3"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
          onClick={handleSignUp}
        >
          Sign-Up
        </button>
        <p className="form-control text-center border-0 mt-3">
          Have an Account ?
          <Link to={"signin"} className="ms-2">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
}
