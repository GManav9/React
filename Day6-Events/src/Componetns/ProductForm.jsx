import React from "react";

function ProductForm({handlechange,handelsubmit }) {
  return (
    <>
      <div>
        <form action="" onSubmit={handelsubmit}>
          <input type="text" className="form-control mt-3" name="title" onChange={handlechange} placeholder="Enter the Image URL" />
          <input type="text" className="form-control mt-3" name="price" onChange={handlechange} placeholder="Enter the Title" />
          <input type="text" className="form-control mt-3" name="img" onChange={handlechange} placeholder="Enter the Price" />
          <button className="btn btn-success form-control mt-3">Submit</button>
        </form>
      </div>
    </>
  );
}
export default ProductForm;
