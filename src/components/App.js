import React, { useState, useEffect } from 'react'
import '../css/app.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid'
const LOCAL_STORAGE_KEY = 'todo_react.tasks'

export  const taskDeleteContext = React.createContext()
export const searchTaskValueContext = React.createContext()

function App() {
  const [tasks, setTasks] = useState(sampleTasks)
  const [addTaskValue, setAddTaskValue] = useState("")
  const [searchTaskValue, setSearchTaskValue] = useState("")
  const [searchTasks, setSearchTasks] = useState([]);

  useEffect(()=>{
    const tasksJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (tasksJSON !== null) setTasks(JSON.parse(tasksJSON))
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function handleTaskAdd(){
    const value = {
      id : uuidv4(),
      value: addTaskValue
    }
    setTasks([...tasks, value])
    setAddTaskValue("")
  }

  function handleTaskDelete(id){
    setTasks(tasks.filter(task => (task.id !== id)))
    setSearchTasks(searchTasks.filter(task => (task.id !== id)))
  }

  function handleSearchValueChange(value){
      setSearchTaskValue(value)
      let regex = new RegExp(value,"i");
      setSearchTasks(tasks.filter(task => {
        return task.value.match(regex) !== null
      }))
  }

  return (
    <taskDeleteContext.Provider value={handleTaskDelete}>
      <searchTaskValueContext.Provider value={{handleSearchValueChange, searchTaskValue}}>
        <Header />
      </searchTaskValueContext.Provider>
      <AddTask  addTaskValue={addTaskValue} setAddTaskValue={setAddTaskValue} handleTaskAdd={ handleTaskAdd } />
      { (searchTaskValue==="") && <TaskList tasks={ tasks } />}
      { (searchTaskValue!=="") && <TaskList tasks={ searchTasks } />}
    </taskDeleteContext.Provider>
  )
}

const sampleTasks = [
  {
    id: uuidv4(),
    value: "task 0",
  },
  {
    id: uuidv4(),
    value: "task 1", 
  }
]

export default App;
