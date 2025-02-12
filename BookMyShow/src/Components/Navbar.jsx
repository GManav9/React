import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="d-flex justify-content-center align-items-center">
        <div className="navbar border border-1 border-danger d-flex justify-content-start align-items-center">
          <div className="logo">
            <img src={"BMS_logo_new.png"} className="img-fluid" alt="" />
          </div>
          <div className="search ms-4">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="search for Movies,Events,Plays,Sports, and Activities"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        <Link to={"/Form"}>Add New Movie</Link>
        </div>
      </header>
      <div className="FirstSection">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={"1726036566435_playcardnewweb.jpg"}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={"1738746077329_endvsindodi3desktopcarousel.jpg"}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
