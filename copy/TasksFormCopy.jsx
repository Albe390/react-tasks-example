import { useState } from "react";

function TasksForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea placeholder="Descrive la tarea aqui" onChange={(e)=> setDescription(e.target.value)}
      value={description}
      ></textarea>
      <button>Guardar</button>
      
    </form>
  );
}

export default TasksForm;
