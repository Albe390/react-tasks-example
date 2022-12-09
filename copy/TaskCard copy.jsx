import {useContext} from 'react';
function TaskCard({task, deleteTask}) {
/*   function mostrarAlerta() {
    alert(task.id)
  } */
  useContext()
  return (
    // <div key={task.id}>
    <div>
    <h1>{task.title}</h1>
    <p>{task.description}</p>
    <button onClick={()=> deleteTask(task.id)}>
      Eliminar tarea</button>
  </div>
  )
}

export default TaskCard