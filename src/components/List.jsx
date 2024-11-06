"use client";
import Item from "./Item";
import { useState } from "react";

function List({ taskArray, deleteTask, setTaskArray, taskStatus }) {
  return (
    <>
      <div className="p-6 bg-orange-100 rounded-lg shadow-md w-2/4 mx-auto flex flex-col items-center">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white bg-red-400 rounded-sm">
            Tasks To Do
          </h2>
          <ul className="space-y-4">
            {taskArray.map(
              (task) =>
                !task.isComplete && (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-md shadow-sm gap-4"
                  >
                    <div>
                      <li className="text-lg font-medium text-gray-900">
                        {task.name}
                      </li>
                      <li className="text-sm">
                        Status: {task.status ? "Active" : "Inactive"}
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
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 font-semibold"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                )
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4 bg-green-400 rounded-sm">
            Completed Tasks
          </h2>
          <ul className="space-y-4">
            {taskArray.map(
              (task) =>
                task.isComplete && (
                  <div key={task.id} className="p-4">
                    <li className="text-lg font-medium text-gray-700 line-through">
                      {task.name}
                    </li>
                    <li className="text-sm text-gray-600">Status: Completed</li>
                  </div>
                )
            )}
          </ul>
        </section>
      </div>
    </>
  );
}

export default List;
