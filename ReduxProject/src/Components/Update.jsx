import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUser } from "../features/Crudslice";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);

  const unique_data = useLocation();

  const [values, setValues] = useState({
    name: unique_data.state.name,
    email: unique_data.state.email,
    phone: unique_data.state.phone,
  });

  // Fetch users if not already loaded
  useEffect(() => {
    if (users.length === 0 && status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length, status]);

  // Set form values once users are available
  useEffect(() => {
    if (users.length > 0) {
      const user = users.find((user) => Number(user.id) === Number(id));
      // console.log("Found user:", user);

      if (user) {
        setValues({
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
        });
      }
    }
  }, [users, id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: unique_data.state.id, user: values }))
      .unwrap() // Ensures we wait for the asyncThunk to resolve
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log("Update failed:", err)); // Catch errors properly
  };

  // If users are still loading, show a loading message
  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            className="form-control mt-3"
            placeholder="Enter the Name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            className="form-control mt-3"
            placeholder="Enter the Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="text"
            name="phone"
            className="form-control mt-3"
            placeholder="Enter the Phone Number"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
          <button className="btn btn-success mt-3" type="submit">
            Update
          </button>
          <Link to="/" className="btn btn-primary ms-3 mt-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
