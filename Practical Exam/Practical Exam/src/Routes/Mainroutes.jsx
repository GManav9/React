import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Pages/Home";
import Navbar from "../Components/navbar";
import AddProducts from "../Pages/AddProducts";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Navbar" element={<Navbar></Navbar>}></Route>
      <Route path="/AddProducts" element={<AddProducts></AddProducts>}></Route>
    </Routes>
  );
}

export default Mainroutes;
