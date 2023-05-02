import React, { useState, useEffect } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      if (!tasks.includes(inputValue)) {
        const newTasks = [...tasks, inputValue];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        setInputValue("");
      } else {
        alert("La tarea ya existe");
      }
    } else {
      alert("Ingrese una tarea");
    }
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className="todolist-container">
      <h1>ToDo List</h1>
      <form>
        <input
          className="input-todolist"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btn-todolist" type="button" onClick={handleAddTask}>
          Agregar
        </button>
      </form>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button
                className="todolist-container"
                type="button"
                onClick={() => handleDeleteTask(index)}
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas</p>
      )}
      <button
        className="todolist-container"
        type="button"
        onClick={handleDeleteAllTasks}
      >
        Borrar todo
      </button>
    </div>
  );
};

export default ToDoList;
