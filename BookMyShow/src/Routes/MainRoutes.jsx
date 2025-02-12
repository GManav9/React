import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AddForm from "../Pages/AddForm";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Form" element={<AddForm></AddForm>}></Route>
    </Routes>
  );
}

export default MainRoutes;
