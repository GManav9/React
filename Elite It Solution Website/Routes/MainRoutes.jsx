import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
// import Services from "../Pages/Services";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      {/* <Route path="/Services" element={<Services></Services>}></Route> */}
    </Routes>
  );
}

export default MainRoutes;
