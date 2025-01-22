import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Product() {
  const [switches, setSwitches] = useState(true);
  const [state, setState] = useState({
    title: "",
    price: "",
    img: "",
  });

  const [arr, setarr] = useState([]);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    setarr([...arr, state]);
    console.log(arr);
  };

  return (
    <>
      <div>
        <button
          onClick={() => setSwitches(false)}
          className="btn btn-success ms-2"
        >
          Product
        </button>
        <button
          onClick={() => setSwitches(true)}
          className="btn btn-success ms-2"
        >
          Form
        </button>

        {switches ? (
          <ProductForm
            handlechange={handlechange}
            handelsubmit={handelsubmit}
          ></ProductForm>
        ) : (
          <ProductList arr={arr}></ProductList>
        )}
      </div>
    </>
  );
}
export default Product;
