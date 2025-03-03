import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h3>Detail Of User</h3>
          <div className="mb-2">
            <strong>Name : {data.name}</strong>
          </div>
          <div className="mb-2">
            <strong>Email : {data.email}</strong>
          </div>
          <div className="mb-2">
            <strong>Phone : {data.phone}</strong>
          </div>
          <Link to={`/Update/${id}`} className="btn btn-success me-2">
            Edit
          </Link>
          <Link to="/" className="btn btn-primary me-2">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
