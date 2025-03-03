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
      navigate("/Dashboard");
      // setName("");
      // setEmail("");
      // setPassword("");
    });
  };

  return (
    <div className="col-xl-3 col-6 m-auto">
      <h1>SignUp</h1>
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
        type="text"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="btn btn-success mt-3" onClick={handleSignUp}>
        Submit
      </button>
      <Link to={"signin"}>
        <button className="btn btn-danger ms-3 mt-3">SignIn</button>
      </Link>
    </div>
  );
}
