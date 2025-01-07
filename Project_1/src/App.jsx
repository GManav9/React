import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Form from "./Components/form.jsx";
import Product from "./Components/product.jsx";

function App() {
  const [count, setCount] = useState(true);

  return (
    <>
      <div className="d-flex mt-5 justify-content-center">
        <nav className="w-25 d-flex justify-content-evenly align-items-center">
          <button
            onClick={() => {
              setCount(true);
            }}
            className="btn btn-success"
          >
            Form
          </button>
          <button
            onClick={() => {
              setCount(false);
            }}
            className="btn btn-success"
          >
            List
          </button>
        </nav>
      </div>

      <Form Data={count} />
    </>
  );
}

export default App;
