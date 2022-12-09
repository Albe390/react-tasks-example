import { tasks as data } from "./tasks.js";
import TaskList from './TaskList';
import TasksForm from './TasksForm';
import {useState, useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(task) {
    setTasks([...tasks,task])
  }
  return (
    <>
      <TasksForm createTask={createTask}/>
     <TaskList tasks={tasks}/> 
    </>
  )
}

export default App

