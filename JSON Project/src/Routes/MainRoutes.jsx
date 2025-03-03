import React from "react";
import Home from "../Pages/Home";
import Form from "../Pages/Form"
import { Routes, Route } from "react-router";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Form" element={<Form></Form>} ></Route>
    </Routes>
  );
}

export default MainRoutes;
