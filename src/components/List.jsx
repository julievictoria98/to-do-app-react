"use client";
import React from "react";
import Item from "./Item";

function List({ taskArray, deleteTask, setTaskArray }) {
  const handleUndo = (id) => {
    setTaskArray(
      taskArray.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: false };
        }
        return task;
      })
    );
  };

  return (
    <div className="p-6 bg-orange-100 rounded-lg shadow-md w-2/4 mx-auto flex flex-col items-center">
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white bg-red-400 rounded-sm mb-4">
          Tasks To Do
        </h2>
        <ul className="space-y-4">
          {taskArray.map(
            (task) =>
              !task.isComplete && (
                <Item
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  setTaskArray={setTaskArray}
                />
              )
          )}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-4 bg-green-400 rounded-sm">
          Completed Tasks
        </h2>
        <ul>
          {taskArray.map(
            (task) =>
              task.isComplete && (
                <Item
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  setTaskArray={setTaskArray}
                  onUndo={handleUndo}
                />
              )
          )}
        </ul>
      </section>
    </div>
  );
}

export default List;
