import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router";
import Mainroutes from "./Routes/Mainroutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Mainroutes></Mainroutes>
      </BrowserRouter>
    </>
  );
}

export default App;
