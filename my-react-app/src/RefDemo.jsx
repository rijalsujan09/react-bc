import React, { useEffect, useRef, useState } from "react";
function RefDemo() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  }, []);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <input ref={inputRef} />
    </div>
  );
}
export default RefDemo;
