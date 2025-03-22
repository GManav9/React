// import React from "react";
// import Navbar from "../Components/navbar";

// function Home() {
//   return (
//     <>
//       <h1>home</h1>
//       <Navbar></Navbar>
//     </>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import axios from "axios";
import { Link } from "react-router-dom"; // make sure this is imported

function Home() {
  const [products, setProducts] = useState([]);

  // Fetch products from db.json
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      // Remove the deleted item from state
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Home</h1>
        <h3 className="mb-3">Product List</h3>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={
                    product.ProductImage || "https://via.placeholder.com/300"
                  }
                  className="card-img-top"
                  alt={product.ProductName}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.ProductName}</h5>
                  <p className="card-text">Price: ${product.ProductPrice}</p>
                  <p className="card-text">
                    Category: {product.ProductCategory}
                  </p>
                  <button
                    className="btn btn-danger w-100 mt-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
