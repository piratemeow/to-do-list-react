import { useState } from "react";
import "./ToDoList.css";
function ToDoList() {
  const [task, setTask] = useState([]);

  const [newtask, setNewtask] = useState("");

  function handleInputChange(event) {
    setNewtask(event.target.value);
  }

  function addTask() {
    if (newtask.trim() !== "") {
      setTask((t) => [...t, newtask]);
      setNewtask("");
    }
  }
  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length-1) {
        const updatedTask = [...task];
        [updatedTask[index], updatedTask[index + 1]] = [
          updatedTask[index + 1],
          updatedTask[index],
        ];
        setTask(updatedTask);
      }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input

          type="text"
          placeholder="Enter a task"
          value={newtask}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {task.map((element, index) => (
          <li key={index}>
            <span className="text">{element}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
