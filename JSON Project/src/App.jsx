import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router";
import MainRoutes from "./Routes/MainRoutes";

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

export default App;
