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
    <div>
      <button onClick={HandleIncrement}>+</button>
      <h1>{state}</h1>

      <Counter2 state2={state}></Counter2>
      <Counter3 state3={state}></Counter3>

      <button onClick={HandleDecrement}>-</button>
    </div>
  );
}
export default Counter;
