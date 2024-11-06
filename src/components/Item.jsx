"use client";
import React from "react";

function Item({ task, deleteTask, setTaskArray }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-md shadow-sm gap-4">
      <div>
        <li
          className={`text-lg font-medium ${
            task.isComplete ? "text-gray-700 line-through" : "text-gray-900"
          }`}
        >
          {task.name}
        </li>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 font-semibold"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setTaskArray((prevTasks) =>
              prevTasks.map((t) => {
                if (t.id === task.id) {
                  return { ...t, isComplete: !task.isComplete };
                }
                return t;
              })
            );
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 font-semibold"
        >
          {task.isComplete ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
}

export default Item;
