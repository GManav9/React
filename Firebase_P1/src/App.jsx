import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Firebase/SignUp";
import SignIn from "./Firebase/SignIn";
import DashBorad from "./Firebase/DashBorad";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignUp}></Route>
          <Route path="/signIn" Component={SignIn}></Route>
          <Route path="/Dashboard" Component={DashBorad}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
