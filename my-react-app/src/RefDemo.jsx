import React, { useState, useEffect, useRef } from "react";

function RefDemo() {
  const ref1 = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  }, []);

  function handleClick() {
    ref1.current.focus();
    ref1.current.style.background = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick}>click Me</button>
      <input ref={ref1} />
    </div>
  );
}
export default RefDemo;
