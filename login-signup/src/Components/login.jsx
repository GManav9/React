import { useState } from "react";
import "./login.css";
import Swal from "sweetalert2";

function Login_signup() {
  const [state, setState] = useState(true);

  const [username, setusrname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [ans, setans] = useState([]);

  const handlesign = (e) => {
    e.preventDefault();

    if (email === "" || username === "" || password === "") {
      Swal.fire({
        title: "Error!",
        text: "All fields are required!",
        icon: "error",
      });
    } else {
      let obj = { username, email, password };
      setans([...ans, obj]);
      setusrname("");
      setemail("");
      setpassword("");
      setState(true); // Switch to login page after successful signup
    }
  };

  console.log(ans);

  const [loginemail, setlogemail] = useState("");
  const [loginpassword, setlogpassword] = useState("");

  const handlelogin = () => {
    let final = ans.filter(
      (el) => el.email == loginemail && el.password == loginpassword
    );

    if (final.length > 0) {
      Swal.fire({
        title: "Good job!",
        text: "Login Successfully!",
        icon: "success",
      });
      setlogemail("");
      setlogpassword("");
    } else {
      let emailCheck = ans.filter((el) => el.email == loginemail);
      let passwordCheck = ans.filter((el) => el.password == loginpassword);

      if (emailCheck.length == 0 && passwordCheck.length == 0) {
        Swal.fire({
          title: "OOPPPSS!",
          text: "Invalid Email and Password!",
          icon: "error",
        });
      } else if (emailCheck.length == 0) {
        Swal.fire({
          title: "OOPPPSS!",
          text: "Email is Not Registered!",
          icon: "error",
        });
      } else if (passwordCheck.length == 0) {
        Swal.fire({
          title: "OOPPPSS!",
          text: "Password is Incorrect!",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="row d-flex justify-content-center align-items-center">
      {state == true ? (
        <div className="login-card col-4">
          <h2>Login-Page</h2>
          {/* <form> */}
          <input
            type="email"
            className="form-control"
            value={loginemail}
            id="email"
            placeholder="Enter your Email"
            onChange={(e) => {
              setlogemail(e.target.value);
            }}
          />
          <input
            type="password"
            className="form-control"
            id="password"
            value={loginpassword}
            placeholder="Enter your password"
            onChange={(e) => {
              setlogpassword(e.target.value);
            }}
          />
          <button className="bt mt-3 form-control" onClick={handlelogin}>
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
          {/* </form> */}
        </div>
      ) : (
        <div class="login-card col-4">
          <h2>Sign-Up Page</h2>
          <form>
            <input
              type="text"
              className="form-control"
              value={username}
              id="text"
              placeholder="Enter your UserName"
              onChange={(el) => {
                setusrname(el.target.value);
              }}
            />
            <input
              type="email"
              className="form-control"
              value={email}
              id="email"
              placeholder="Enter your E-mail"
              onChange={(el) => {
                setemail(el.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              value={password}
              id="password"
              placeholder="Enter your password"
              onChange={(el) => {
                setpassword(el.target.value);
              }}
            />
            <button className="bt mt-3 form-control" onClick={handlesign}>
              SignUp
            </button>
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
