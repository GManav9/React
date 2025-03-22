import React from "react";
import "./Navbar.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <div>
      <nav>
        <a href="#" class="brand">
          ProductManaget
        </a>
        <div>
          <a href="">Home</a>
          <Link to={"/AddProducts"}>
            <a href="">Add Product</a>
          </Link>
          <a href="">Products</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
