import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let storedMovies = JSON.parse(localStorage.getItem("Student")) || [];
    setMovies(storedMovies);
  }, []);

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("Student", JSON.stringify(updatedMovies));
  };

  const handleEdit = (Id) => {
    let singleData = movies.find((movie) => movie.id == Id);
    navigate("/editForm", { state: singleData });
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

  // <Navbar setSearchTerm={setSearchTerm} />;

  return (
    <>
      <div className="container-fluid px-0">
        <Navbar setSearchTerm={setSearchTerm} />

        {/* Banner Swiper */}
        <div className="container">
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
            <SwiperSlide>
              <div className="d-flex justify-content-center w-100">
                <img
                  src={"1726036566435_playcardnewweb.jpg"}
                  alt=""
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", maxHeight: "400px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center w-100">
                <img
                  src={"1738746077329_endvsindodi3desktopcarousel.jpg"}
                  alt=""
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", maxHeight: "400px" }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="container mt-4">
        <h2 className="text-center">Movie List</h2>

        <div className="Features mb-4 row justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-2 mb-md-0">
            <select
              className="form-select"
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

          <div className="col-12 col-md-5 d-flex flex-wrap gap-2 justify-content-center">
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
            spaceBetween={5}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {SortedMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="card col-xl-11 col-5 h-100 w-100">
                  <img
                    src={movie.image}
                    className="card-img-top img-fluid"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt={movie.moviename}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5
                      className="text-bold text-dark"
                      style={{ height: "50px" }}
                    >
                      {movie.moviename}
                    </h5>
                    <p style={{ height: "50px" }}>{movie.type}</p>
                    <div className="mt-auto">
                      <button
                        onClick={() => handleDelete(movie.id)}
                        className="btn btn-danger btn-sm me-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdit(movie.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
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
