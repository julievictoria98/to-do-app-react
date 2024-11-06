"use client";

import List from "./List";
import { useState } from "react";

function ToDoApp() {
  const [nextId, setNextId] = useState(1);
  const [taskName, setTaskName] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [taskStatus, setTaskStatus] = useState(true);

  const deleteTask = (id) => {
    setTaskArray(taskArray.filter((task) => task.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">To-Do App</h1>

      <form className="flex gap-4 mb-8 w-full max-w-md">
        <input
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setTaskArray([
              ...taskArray,
              { name: taskName, id: nextId, isComplete: false },
            ]);
            setNextId(nextId + 1);
            setTaskName("");
          }}
          className="bg-orange-400 hover:bg-orange-800 text-white rounded-md px-6 py-2 font-semibold transition-colors"
        >
          Add
        </button>
      </form>

      <List
        taskArray={taskArray}
        deleteTask={deleteTask}
        setTaskArray={setTaskArray}
        taskStatus={taskStatus}
      />
    </div>
  );
}

export default ToDoApp;
