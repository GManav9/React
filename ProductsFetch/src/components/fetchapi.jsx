import { useEffect, useState } from "react";
import "./new.css";

function Fetch() {
  const [state, setstate] = useState(0);
  const [ans, setans] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setans(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center flex-wrap ">
        {ans ? (
          ans.map((el) => {
            return (
              <>
                {/* <div>
                    <img src={el.thumbnail} alt="" className="card"/>
                    <p>{el.title}</p>
                    <p>{el.price}</p>
                  </div> */}

                <div
                  className="d-flex justify-content-center align-items-center flex-column mt-5 border"
                  id="box"
                >
                  <div id="img">
                    <img
                      src={el.thumbnail}
                      className="card-img-top img-fluid"
                      alt={el.title}
                    ></img>
                  </div>
                  <div className="card-body">
                    <p className="card-title text-center">{el.title}</p>
                    <p className="card-text text-center">${el.price}</p>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h1>Loading.....</h1>
        )}
      </div>
    </>
  );
}
export default Fetch;
