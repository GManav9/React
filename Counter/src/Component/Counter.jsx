import { useState } from "react";
import Counter2 from "./Counter2.jsx";
import Counter3 from "./Counter3.jsx";

function Counter() {
  const [state, setstate] = useState(0);

  let HandleIncrement = () => {
    setstate(state + 1);
    console.log(state);
  };

  let HandleDecrement = () => {
    if (state <= 0) {
      alert("Sorry This Can Be Nagative");
      return 0;
    }
    setstate(state - 1);
    console.log(state);
  };

  return (
    <>
      <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-xl-2 d-flex justify-content-evenly align-items-center">
          <button className="btn btn-primary" onClick={HandleIncrement}>
            +
          </button>
          <h1>{state}</h1>

          <Counter2 state2={state}></Counter2>
          <Counter3 state3={state}></Counter3>

          <button className="btn btn-primary" onClick={HandleDecrement}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
export default Counter;
