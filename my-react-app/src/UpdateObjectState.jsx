import { useState } from "react";

function UpdateObjectState() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div className="car-container">
      <p>
        Your favourate car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" onChange={handleYearChange} value={car.year} />
      <br />
      <input type="text" onChange={handleMakeChange} value={car.make} />
      <br />
      <input type="text" onChange={handleModelChange} value={car.model} />
    </div>
  );
}
export default UpdateObjectState;
