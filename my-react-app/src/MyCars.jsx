import { useState } from "react";

function MyCars() {
  const [cars, setCars] = useState([]);
  //   const [car, setCar] = useState({});
  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  function changeYear(event) {
    setYear(event.target.value);
  }
  function changeMake(event) {
    setMake(event.target.value);
  }
  function changeModel(event) {
    setModel(event.target.value);
  }
  const addCarHandle = () => {
    const newCar = {
      year: year,
      make: make,
      model: model,
    };

    setCars((c) => [...c, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  };

  const removeCarHandle = (index) => {
    setCars(cars.filter((_, i) => i !== index));
  };

  return (
    <div className="my-car-container">
      <h3>My Cars</h3>

      <dir>
        <input type="number" onChange={changeYear} value={year} />
        <br />
        <br />
        <input type="text" onChange={changeMake} value={make} />
        <br />
        <br />
        <input type="text" onChange={changeModel} value={model} />
        <br />
        <br />
        <button onClick={addCarHandle}>Add Car</button>
        <br />
      </dir>

      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} &nbsp; {car.make} &nbsp; {car.model} &nbsp; &nbsp;
            <button onClick={() => removeCarHandle(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MyCars;
