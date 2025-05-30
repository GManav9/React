import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router";
import MainRoutes from "../Routes/MainRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <MainRoutes></MainRoutes>
      </BrowserRouter>
    </>
  );
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>;
export default App;
