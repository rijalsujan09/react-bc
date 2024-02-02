import React, { useState } from "react";

const MyComponent = () => {
  let [name, setName] = useState("Sujan");
  let [age, setage] = useState(0);
  let [isEmployed, setIsEmployed] = useState(true);

  const handleEvent = () => {
    console.log("Button clicked");
    setName("Sujan Rijal");
  };

  function increamentAge() {
    setage(age + 1);
  }

  const toggleStatus = () => {
    // isEmployed ? setIsEmployed(false) : setIsEmployed(true);
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => handleEvent()}>Click</button>

      <p>Age: {age}</p>
      <button onClick={() => increamentAge()}>Click</button>

      <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={() => toggleStatus()}>Click</button>
    </div>
  );
};
export default MyComponent;
