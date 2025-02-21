import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Edit() {
  const [image, setImage] = useState("");
  const [moviename, setMovieName] = useState("");
  // const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const allData = useLocation();

  useEffect(() => {
    setFields();
  }, []);

  const setFields = () => {
    setImage(allData.state.image);
    setMovieName(allData.state.moviename);
    setLanguage(allData.state.language);
    setType(allData.state.type);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("Student"));
    let singleData = data.find((movie) => movie.id === allData.state.id);
    singleData.moviename = moviename;
    singleData.image = image;
    singleData.language = language;
    singleData.type = type;

    localStorage.setItem("Student", JSON.stringify(data));
    navigate("/");
  };
  return (
    <div>
      <div>
        {/* <Navbar></Navbar> */}
        <form
          onSubmit={handleUpdate}
          action=""
          className="d-flex shadow-lg justify-content-center align-items-center flex-column col-xl-4 m-auto mt-5 p-5"
        >
          <h3>Edit Movie</h3>
          <input
            value={image}
            className="form-control mt-3"
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Enter the Movie Poster"
          />
          <input
            value={moviename}
            className="form-control mt-3"
            onChange={(e) => setMovieName(e.target.value)}
            type="text"
            placeholder="Enter the Movie Title"
          />
          <input
            value={language}
            className="form-control mt-3"
            onChange={(e) => setLanguage(e.target.value)}
            type="text"
            placeholder="Enter the Language"
          />
          <input
            value={type}
            className="form-control mt-3"
            onChange={(e) => setType(e.target.value)}
            type="text"
            placeholder="Enter the Movie Type "
          />

          <button type="submit" className="mt-3 form-control">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
