import Header from "./components/Header";
import Tasks from "./components/Tasks.js";
import AddTask from "./components/AddTask.js";
import { useState } from "react";
import Footer from "./components/Footer.js";
function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [Datas, setDatas] = useState([
    {
      id:1,
      title:"Task 1",
      day:"5 Feb at 6:30 pm",
      reminder:false
    }
  ])
  // Add Task
  const addTask=(task)=>
  {
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = {id,...task}
    console.log(newTask)
    setDatas([...Datas, newTask])
    console.log(...Datas)
    
  }
  //Delete Task
  const deleteTask = (id) => {
    setDatas(Datas.filter((task) => {
      return task.id !== id
    }))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    setDatas(Datas.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task
    }))
  }

  return (
    <div className='container'>
      <h1 style={{ color: '#ff4d4d' }} align='center'> TASK MANAGER</h1>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {Datas.length > 0 ? (<Tasks tasks={Datas} onDelete={deleteTask} onToggle={toggleReminder} />) : (<h1 style={{ color: 'navy' }} align="center">Please add some task</h1>)}
      <Footer/>
    </div>
  );
}

export default App;
