import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

function AddProducts() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingProduct = location.state?.product || null;

  const [product, setProduct] = useState({
    id: null,
    ProductName: "",
    ProductPrice: "",
    ProductImage: "",
    ProductCategory: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setProduct({
        id: editingProduct.id,
        ProductName: editingProduct.ProductName,
        ProductPrice: editingProduct.ProductPrice,
        ProductImage: editingProduct.ProductImage,
        ProductCategory: editingProduct.ProductCategory,
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (product.id) {
        await axios.put(`${API_URL}/${product.id}`, product);
        setMessage("Product updated successfully!");
      } else {
        const newProduct = { ...product, id: Date.now() };
        await axios.post(API_URL, newProduct);
        setMessage("Product added successfully!");
      }

      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to save product.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">
        {product.id ? "Edit Product" : "Add Product"}
      </h2>
      <div className="row">
        <div className="col-xl-4 col-8 col-sm-8 col-md-6 col-lg-6 m-auto p-3 rounded">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="ProductName"
              className="form-control mt-3"
              placeholder="Enter the Product Name"
              value={product.ProductName}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="ProductPrice"
              className="form-control mt-3"
              placeholder="Enter the Product Price"
              value={product.ProductPrice}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="ProductImage"
              className="form-control mt-3"
              placeholder="Enter the Product Image URL"
              value={product.ProductImage}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="ProductCategory"
              className="form-control mt-3"
              placeholder="Enter the Product Category"
              value={product.ProductCategory}
              onChange={handleChange}
              required
            />
            <button className="btn btn-success form-control mt-3" type="submit">
              {product.id ? "Update" : "Add"} Product
            </button>
          </form>
          {message && (
            <div className="text-center text-success mt-3">{message}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
