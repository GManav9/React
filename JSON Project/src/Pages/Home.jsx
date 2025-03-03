import React from "react";
import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom"


function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div>Home</div>
      <Link to={"/Form"} >Form</Link>
    </>
  );
}

export default Home;
