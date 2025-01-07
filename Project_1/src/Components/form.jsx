import React, { useState } from "react";
import Product from "./product";
import "./new.css";

function Form(props) {
  const [img, setimg] = useState("");
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [array, setarray] = useState([]);
  const handleCart = () => {
    let obj = {
      img,
      name,
      price,
    };
    setarray([...array, obj]);
  };
  console.log(array);

  return (
    <>
      {props.Data == true ? (
        <div className="row w-100 d-flex justify-content-center align-items-center">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <form
              action=""
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <input
                onChange={(e) => {
                  setimg(e.target.value);
                }}
                className="mt-3 form-control"
                type="text"
                name=""
                placeholder="Enter the Product Image"
                id=""
              />
              <input
                onChange={(e) => {
                  setname(e.target.value);
                }}
                className="mt-3 form-control"
                type="text"
                name=""
                placeholder="Enter the Product Detail"
                id=""
              />
              <input
                onChange={(e) => {
                  setprice(e.target.value);
                }}
                className="mt-3 form-control"
                type="text"
                name=""
                placeholder="Enter the Product Price"
                id=""
              />
              <button
                type="button"
                onClick={handleCart}
                className="btn btn-primary mt-3"
              >
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Product list={array}></Product>
      )}
    </>
  );
}

export default Form;
