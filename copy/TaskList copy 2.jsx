import { tasks as data } from "./tasks.js";
import { useState, useEffect } from "react";
// console.log(tasks);
function TaskList() {
 /*  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []); */
  if (tasks.length === 0) {
    return <h1>No hay todavia tareas </h1>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
