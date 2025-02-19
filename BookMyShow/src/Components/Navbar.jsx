import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ setSearchTerm }) {
  const [term, setTerm] = useState("");
  const [record, setRecord] = useState([]);

  const searchedData =
    term.trim() === ""
      ? [] // Don't show anything if search is empty
      : record.filter(
          (item) => item.moviename.toLowerCase().includes(term.toLowerCase())
          // item.type.toLowerCase().includes(term.toLowerCase()) // Filtering by 'moviename' and 'type'
        );

  useEffect(() => {
    setSearchTerm(term);
  }, [term, setSearchTerm]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Student")) || [];
    setRecord(data);
  }, []);

  return (
    <>
      <header className="d-flex justify-content-center align-items-center">
        <div className="navbar d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src={"BMS_logo_new.png"} className="img-fluid" alt="" />
          </div>
          <div className="search ms-4 ">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="search for Movies,Events,Plays,Sports, and Activities"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />

              {searchedData.map((e, i) => {
                return <div id="key"></div>;
              })}
            </div>
          </div>
          <div className="bar">
            <Link className="btn btn-danger ms-2 me-5" to={"/Form"}>
              Add New Movie
            </Link>
            <button className="btn btn-danger ms-2 me-5">Sign In</button>
            <button className="btn fs-5">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
