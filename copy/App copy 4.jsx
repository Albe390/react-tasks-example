import { tasks as data } from "./data/tasks.js";
import TaskList from './components/TaskList';
import TasksForm from './components/TasksForm';
import {useState, useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id : tasks.length,
      description: task.description
    }])
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  return (
    <>
      <TasksForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/> 
    </>
  )
}

export default App

