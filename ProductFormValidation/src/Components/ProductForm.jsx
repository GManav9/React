import React, {useState} from 'react'
import sty from "./Product.module.css";

function ProductForm({handleSubmit, formData, handleChange, handleBlur, handleFocus, valid}) {

  

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-4">
      <h1 className="fs-3 mt-5">Product Form</h1>
      <form action="" onSubmit={handleSubmit} className={sty.form_data}>
        <div className="d-flex flex-column mt-4 align-items-start px-4">
          <label htmlFor="">Image URL</label>
          <input
            type="text"
            style={{ borderColor: valid.url ? "" : "red" }}
            className="w-100 form-control mt-2 shadow-none rounded-0"
            value={formData.url}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder="Image URL"
            name="url"
          />
          <span className="mt-2 mb-3" style={{ color: valid.url ? "" : "red" }}>
            {valid.url ? "" : "Please fillup this field...!"}
          </span>
        </div>
        <div className="d-flex flex-column align-items-start px-4">
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            style={{ borderColor: valid.title ? "" : "red" }}
            className="w-100 form-control mt-2 shadow-none rounded-0"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder="Product Title"
            name="title"
          />
          <span
            className="mt-2 mb-3"
            style={{ color: valid.title ? "" : "red" }}
          >
            {valid.title ? "" : "Please enter the product name...!"}
          </span>
        </div>
        <div className="d-flex flex-column align-items-start px-4">
          <label htmlFor="">Product Price </label>
          <input
            type="text"
            style={{ borderColor: valid.price ? "" : "red" }}
            className="w-100 form-control mt-2 shadow-none rounded-0"
            onChange={handleChange}
            value={formData.price}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder="Product Price"
            name="price"
          />
          <span
            className="mt-2 mb-3"
            style={{ color: valid.price ? "" : "red" }}
          >
            {valid.price ? "" : "Please enter the only digits...!"}
          </span>
        </div>
        <div className="d-flex flex-column align-items-start px-4">
          <input
            className="mt-3 btn btn-primary mb-4 w-100"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
}

export default ProductForm
