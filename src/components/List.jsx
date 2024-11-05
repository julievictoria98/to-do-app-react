"use client";
import Item from "./Item";
import { useState } from "react";

function List({ taskArray, deleteTask }) {
  return (
    <>
      <ul>
        {taskArray.map((task) => (
          <div
            key={task.id}
            className="flex gap-4 box-border justify-between mt-8 "
          >
            <div>
              <li key={task.id}> {task.name}</li>
              <li>{task.id}</li>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  deleteTask(task.id);
                }}
                className="bg-blue-700 text-white rounded-sm pr-5 pl-5 border border-black box-border"
              >
                Delete
              </button>
              <button className="bg-blue-700 text-white rounded-sm pr-5 pl-5 border border-black box-border">
                Complete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default List;
