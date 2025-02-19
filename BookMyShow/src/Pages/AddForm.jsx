import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const [image, setImage] = useState("");
  const [moviename, setMovieName] = useState("");
  // const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [type, setType] = useState("");

  const [record, setRecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Student")) || [];
    setRecord(data);
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault;

    let obj = { id: Date.now(), image, moviename, language, type };
    setRecord([...record, obj]);
    localStorage.setItem("Student", JSON.stringify([...record, obj]));

    localStorage.setItem("image", image);
    localStorage.setItem("moviename", moviename);
    localStorage.setItem("language", language);
    // localStorage.setItem("description", description);
    localStorage.setItem("type", type);

    navigate("/");
  };

  return (
    <>
      <div>
        {/* <Navbar></Navbar> */}
        <form
          action=""
          className="d-flex shadow-lg justify-content-center align-items-center flex-column col-xl-4 m-auto mt-5 p-5"
        >
          <h3>Add Movie</h3>
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

          <button
            type="submit"
            className="mt-3 form-control"
            onClick={handlesubmit}
          >
            Submit
          </button>
        </form>
      </div>

      {/* <div>
        <h2>Movie List</h2>

        {record.length > 0 ? (
          <div className="d-flex justify-content-evenly align-items-center border border-1 border-danger w-50 m-auto">
            {record.map((item) => (
              <div key={item.id} className="movie-card">
                <img
                  src={item.image}
                  alt={item.moviename}
                  style={{ width: "100px", height: "150px" }}
                />
                <h3>{item.moviename}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border w-50 m-auto border-1 border-danger">
            <p className="text-center">No movies added yet.</p>
          </div>
        )}
      </div> */}
    </>
  );
}

export default AddForm;
