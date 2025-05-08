import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setSearchTerm }) {
  const [term, setTerm] = useState("");
  const [record, setRecord] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Student")) || [];
    setRecord(data);
  }, []);

  useEffect(() => {
    setSearchTerm(term);
  }, [term, setSearchTerm]);

  return (
    <div className="container-fluid px-0">
      <div className="d-flex justify-content-center navbar-container">
        <div className="w-100">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3 py-2">
            <Link className="navbar-brand" to="/">
              <img src="BMS_logo_new.png" alt="Logo" height="40" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse mt-2 mt-lg-0"
              id="navbarNav"
            >
              <form className="d-flex flex-grow-1 me-lg-3">
                <div className="input-group w-100">
                  <span className="input-group-text">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for Movies, Events, Plays, Sports..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                </div>
              </form>

              <div className="d-flex flex-column flex-lg-row align-items-lg-center mt-3 mt-lg-0 ms-lg-auto">
                <Link
                  to="/Form"
                  className="btn btn-danger mb-2 mb-lg-0 me-lg-2"
                >
                  Add New Movie
                </Link>
                <button className="btn btn-danger mb-2 mb-lg-0 me-lg-2">
                  Sign In
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
