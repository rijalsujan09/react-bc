import { useState } from "react";
import PropTypes from "prop-types";

function ToDoApp(props) {
  const [todoList, setToDoList] = useState([
    "Complete React Tutorial",
    "Complete Golang Tutorial",
    "Complete NodeJs Tutorial",
  ]);

  const [toDoItem, setToDoItem] = useState("");

  //   function handleChange(event) {
  //     setToDoItem(event.target.value);
  //   }

  function addToDo() {
    const newItem = document.getElementById("item").value;
    document.getElementById("item").value = "";
    setToDoList((t) => [...todoList, newItem]);
  }

  function removeToDo(index) {
    setToDoList(todoList.filter((_, i) => i !== index));
  }

  function changeUp(index) {
    if (index > 0) {
      const updatedList = [...todoList];
      [updatedList[index], updatedList[index - 1]] = [
        updatedList[index - 1],
        updatedList[index],
      ];
      setToDoList(updatedList);
    }
  }
  function changeDown(index) {
    if (index < todoList.length - 1) {
      const updatedList = [...todoList];
      [updatedList[index], updatedList[index + 1]] = [
        updatedList[index + 1],
        updatedList[index],
      ];
      setToDoList(updatedList);
    }
  }

  return (
    <div className="main-container">
      <p id="welcome-msg">
        welcom to TO-DO App<span>&nbsp;{props.name}</span>
      </p>

      <div className="todo-container">
        <input id="item" type="text" placeholder="Enter todo" />
        <button onClick={addToDo}>Add ToDo</button>
      </div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item} &nbsp;
            <button onClick={() => changeUp(index)}>⬆️</button>&nbsp;
            <button onClick={() => changeDown(index)}>⬇️</button>&nbsp;
            <button onClick={() => removeToDo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
ToDoApp.propTypes = {
  name: PropTypes.string,
};
ToDoApp.defaultProps = {
  name: "Guest",
};

export default ToDoApp;
