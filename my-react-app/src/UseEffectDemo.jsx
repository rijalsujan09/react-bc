import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count : ${count}  & Color: ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function minusCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c !== "green" ? "green" : "red"));
  }

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handelResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handelResize);
    document.title = `width : ${width}  & height: ${height}`;
    console.log("event listner added");

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  useEffect(() => {
    document.title = `width : ${width}  & height: ${height}`;
  }, [height, width]);

  return (
    <div>
      <p style={{ background: color }}>Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={minusCount}>Substract</button>
      <button onClick={changeColor}>ChangeColor</button>
      <hr />
      <p>Window Width: {width} px</p>
      <p>Window Width: {height} px</p>
    </div>
  );
}
export default UseEffectDemo;
