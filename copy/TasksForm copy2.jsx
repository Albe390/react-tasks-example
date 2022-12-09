import { useState } from "react";

function TasksForm({createTask}) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask={
      title,
      id : 4,
      description:'Algo nuevo'
    }
    createTask(newTask)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TasksForm;
