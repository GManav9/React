import React from "react";

function Form() {
  return (
    <div className="row w-100">
      <form
        action=""
        className="d-flex shadow-lg justify-content-center align-items-center flex-column col-xl-4 m-auto mt-5 p-5"
      >
        <h3>Add Movie</h3>
        <input
          className="form-control mt-3"
          type="text"
          placeholder="Enter the Movie Poster"
        />
        <input
          className="form-control mt-3"
          type="text"
          placeholder="Enter the Movie Title"
        />
        <input
          className="form-control mt-3"
          type="text"
          placeholder="Enter the Language"
        />
        <input
          className="form-control mt-3"
          type="text"
          placeholder="Enter the Movie Type "
        />

        <button type="submit" className="mt-3 form-control">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
