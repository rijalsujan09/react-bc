import "./colorpicker.css";

import { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function onChangeColor(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h3 className="color-picker-title">Color Picker</h3>
      <div className="color-display" style={{ background: color }}>
        <p className="picked-color">Your Color: {color}</p>
      </div>
      <label>Chose Color</label>
      <input type="color" value={color} onChange={onChangeColor} />
    </div>
  );
}
export default ColorPicker;
