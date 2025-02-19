import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch movies from localStorage
    let storedMovies = JSON.parse(localStorage.getItem("Student")) || [];
    setMovies(storedMovies);
  }, []);

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("Student", JSON.stringify(updatedMovies)); // Update localStorage
  };

  const handleEdit = (Id) => {
    let singleData = record.find((movie) => movie.id == userId);
    setName(singleData.image);
    setSub(singleData.moviename);
    setCity(singleData.description);
    setEditIndex(Id);

    navigate("/Form");
  };

  const filtereddata =
    cat === "all"
      ? movies
      : movies.filter((movie) =>
          movie.type?.toLowerCase().includes(cat.toLowerCase())
        );

  const searchedMovies =
    searchTerm.trim() === ""
      ? filtereddata
      : filtereddata.filter((movie) =>
          movie.moviename.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const SortedMovies = [...searchedMovies].sort((a, b) =>
    sort === "asc"
      ? a.moviename.localeCompare(b.moviename)
      : b.moviename.localeCompare(a.moviename)
  );

  return (
    <>
      <div>
        <Navbar setSearchTerm={setSearchTerm}></Navbar>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div className="d-flex justify-content-center  w-100">
              <img src={"1726036566435_playcardnewweb.jpg"} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center  w-100">
              <img
                src={"1738746077329_endvsindodi3desktopcarousel.jpg"}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container mt-4">
        <h2 className="text-center">Movie List</h2>

        <div className="Features mb-4 d-flex justify-content-around align-items-center">
          <div className="container1 w-25">
            {/* <label className="form-label">Select Category:</label> */}
            <select
              class="form-select"
              id="categorySelect"
              onChange={(e) => setCat(e.target.value)}
            >
              <option selected disabled defaultValue="all">
                Choose a category
              </option>
              <option value="all">All Categories</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
              <option value="thriller">Thriller</option>
              <option value="comedy">Comedy</option>
            </select>
          </div>

          <div className="d-flex justify-content-around align-items-center w-25">
            <button
              className="btn btn-success"
              onClick={() => {
                setSort("asc");
              }}
            >
              Sort By A-Z
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                setSort("desc");
              }}
            >
              Sort By Z-A
            </button>
          </div>
        </div>

        {SortedMovies.length > 0 ? (
          <Swiper
            slidesPerView={5}
            spaceBetween={5}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop="true"
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {SortedMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="card col-xl-11">
                  <img src={movie.image} className="card-img-top" />
                  <div className="card-body">
                    <h5
                      className="text-bold text-dark"
                      style={{ height: "50px" }}
                    >
                      {movie.moviename}
                    </h5>
                    <p className="" style={{ height: "50px" }}>
                      {movie.type}
                    </p>
                    <button
                      onClick={() => handleDelete(movie.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit()}
                      className="btn btn-danger ms-2"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                {/* <div className="movie-card text-center p-2 border rounded shadow">
                  <img
                    src={movie.image}
                    alt={movie.moviename}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <h4 className="mt-2">{movie.moviename}</h4>
                  <p>{movie.description}</p>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="btn btn-danger mt-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit()}
                    className="btn btn-danger mt-2"
                  >
                    Edit
                  </button>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-muted">No movies added yet.</p>
        )}
      </div>
    </>
  );
}

export default Home;
