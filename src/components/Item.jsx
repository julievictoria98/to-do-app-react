"use client";
import { useState } from "react";

function Item({ taskName, setTaskName, taskArray, setTaskArray }) {
  const [nextId, setNextId] = useState(1);
  console.log(taskArray);

  return (
    <div>
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
      {/* <ul>
        {taskArray.map((task) => (
          <>
            <li key={task.id}> {task.name}</li>
            <li>{task.id}</li>
          </>
        ))}
      </ul> */}
    </div>
  );
}
export default Item;

{
  /* <div className="flex gap-4">
        <button
          className="bg-blue-700 text-white rounded-sm pr-5 pl-5 border border-black"
          type="submit"
        >
          Complete
        </button>
        <button
          className="bg-blue-700 text-white rounded-sm pr-5 pl-5 border border-black"
          type="reset"
        >
          Undo
        </button>
        <div className="to_do_list"></div>
      </div> */
}
