import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleEdit = (product) => {
    navigate("/AddProducts", { state: { product } });
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
                  className="card-img-top img-fluid"
                  alt={product.ProductName}
                  style={{ height: "400px", objectFit: "contain"  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.ProductName}</h5>
                  <p className="card-text">Price: ${product.ProductPrice}</p>
                  <p className="card-text">
                    Category: {product.ProductCategory}
                  </p>
                  <button
                    className="btn btn-primary w-100 mt-2"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
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
