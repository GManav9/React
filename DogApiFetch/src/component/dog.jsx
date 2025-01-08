import { useEffect, useState } from "react";
import "./new.css";
function Dog() {
  const [ans, setans] = useState("");

  useEffect(() => {
    fetchdog();
  }, []);
  function fetchdog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setans(res.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={fetchdog} className="button mt-5 m-auto">
          Change
        </button>
      </div>

      <div className="dog d-flex justify-content-center align-items center mt-5 m-auto">
        <img src={ans} alt="" />
      </div>
    </>
  );
}

export default Dog;
