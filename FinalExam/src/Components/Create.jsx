import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/Crudslice";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [values, setValues] = useState({
      name: "",
      email: "",
      phone: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addUser(values)).then(() => {
        navigate("/");
      });
    };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-control mt-3"
            placeholder="Enter the Name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            className="form-control mt-3"
            placeholder="Enter the Email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="text"
            name="phone"
            className="form-control mt-3"
            placeholder="Enter the phone Number"
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
          <button className="btn btn-success mt-3" type="submit">
            Submit
          </button>
          <Link to="/" className="btn btn-primary ms-3 mt-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
