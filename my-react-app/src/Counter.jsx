import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }

  function reset() {
    setCount((c) => (c = 0));
  }

  return (
    <div className="counter-container">
      <p className="text-content">{count}</p>
      <button className="btn btn-decrement" onClick={decrement}>
        decrement
      </button>
      <button className="btn btn-reset" onClick={reset}>
        reset
      </button>
      <button className="btn btn-increment" onClick={increment}>
        increment
      </button>
    </div>
  );
}
export default Counter;
