"use client";
import { useState } from "react";
function ToDoApp2() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskText: "Lær React",
      isComplete: false,
    },
    {
      id: 2,
      taskText: "Lær Vue",
      isComplete: false,
    },
    {
      id: 3,
      taskText: "Lær Angular",
      isComplete: false,
    },
  ]);

  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("task"));
    const taskText = {
      id: crypto.randomUUID(),
      taskText: formData.get("task"),
      isComplete: false,
    };
    // setTasks(tasks.concat(newTask)); den ene metode, den nedenfor er en anden slags.
    setTasks([newTask, ...tasks]);
    event.target.reset();
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    // her siger man at man skal filter array hvor id man har trykket med IKKE er med mere.
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
      })
    );
  }

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} />
    </section>
  );
}

export default ToDoApp2;

function Form({ addTask }) {
  return (
    <form onSubmit={addTask}>
      {/* For Accesibility  */}
      <label htmlFor="Add Task">Task</label>
      <input type="text" placeholder="Enter task name" name="task" />
      <button>Add Task</button>
    </form>
  );
}

function List({ tasks }) {
  return (
    <div>
      <section>
        <h2>Tasks To Do</h2>
        <ul>
          {tasks.map((task) => (
            <ListItem key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function ListItem({ task, deleteTask }) {
  const { id, taskText, isComplete } = task;
  return (
    <li>
      <div>
        <span>{task.taskText}</span>
      </div>
      <div>
        <button onClick={() => deleteTask(id)}>Delete</button>
        {/* arrow funktion gør at det først er når man klikker dne kører, ellers ville deleteTask køre med det samme Eller fejle */}
        <button onClick={() => toggleTask(id)}>Complete</button>
      </div>
    </li>
  );
}
