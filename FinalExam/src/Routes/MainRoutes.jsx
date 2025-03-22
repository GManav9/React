import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Components/Home";
import Create from "../Components/Create";
import Update from "../Components/Update";
import Read from "../Components/Read";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Create" element={<Create></Create>}></Route>
      <Route path="/Update" element={<Update></Update>}></Route>
      <Route path="/Read/:id" element={<Read></Read>}></Route>
    </Routes>
  );
}

export default MainRoutes;
