import React from "react";
import Navbar from "../Components/Navbar";

function AddForm() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1>AddToCart</h1>
        <form action="" className="d-flex justify-content-center align-items-center flex-column">
          <input type="text" placeholder="Enter the Image" />
          <input type="text" placeholder="Enter the Movie Name" />
          <input type="" placeholder="Enter the Image" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddForm;
