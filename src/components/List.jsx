"use client";
import Item from "./Item";
import { useState } from "react";

function List({ taskArray, deleteTask, setTaskArray, taskStatus }) {
  return (
    <>
      <ul>
        {taskArray.map((task) =>
          !task.isComplete ? (
            <div
              key={task.id}
              className="flex gap-4 box-border justify-between mt-8 "
            >
              <div>
                <li key={task.id}> {task.name}</li>
                <li>{task.id}</li>
                <li>{task.status}</li>
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
                <button
                  onClick={() =>
                    setTaskArray(
                      taskArray.map((t) => {
                        if (t.id === task.id) {
                          return { ...t, isComplete: true };
                        }
                        return t;
                      })
                    )
                  }
                  className="bg-blue-700 text-white rounded-sm pr-5 pl-5 border border-black box-border"
                >
                  Complete
                </button>
              </div>
            </div>
          ) : (
            <div key={task.id} className="bg-red-500">
              <li key={task.id}> {task.name}</li>
              <li>{task.id}</li>
              <li>{task.status}</li>
            </div>
          )
        )}
      </ul>
    </>
  );
}

export default List;
