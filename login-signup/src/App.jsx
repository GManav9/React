import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login_signup from "./Components/login.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Login_signup />
    </div>
  );
}

export default App;
