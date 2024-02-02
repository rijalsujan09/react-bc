import { useState } from "react";

function UpdateArrayState() {
  const [foods, setFood] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFood((f) => [...foods, newFood]);
  }
  function handleRemoveFood(index) {
    setFood(foods.filter((_, i) => i !== index));
  }

  return (
    <div className="food-container">
      <h1>List of Food</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleRemoveFood(index)}>X</button>
          </li>
        ))}
      </ul>
      <br />
      <input type="text" id="foodInput" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
export default UpdateArrayState;
