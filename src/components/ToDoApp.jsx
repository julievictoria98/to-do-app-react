"use client";

import List from "./List";
import { useState } from "react";
function ToDoApp() {
  const [nextId, setNextId] = useState(1);
  const [taskName, setTaskName] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const deleteTask = (id) => {
    setTaskArray(taskArray.filter((task) => task.id !== id));
  };

  return (
    <>
      <form action="" className="flex gap-4 mb-4">
        <input
          className="border border-black"
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setTaskArray([...taskArray, { name: taskName, id: nextId }]);
            setNextId(nextId + 1);
          }}
          className="bg-blue-700 text-white rounded-sm pr-5 pl-5 border border-black"
        >
          Add
        </button>
      </form>
      <List taskArray={taskArray} deleteTask={deleteTask} />
    </>
  );
}

export default ToDoApp;
