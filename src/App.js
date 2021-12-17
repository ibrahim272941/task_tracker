import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
// import Header from "./components/Header";
// import Tasks from "./components/Tasks";
// import AddTask from "./components/AddTask";

function App() {
 const [tasks, setTasks] = useState([
  
 ]);
 const [showAddTas, setShowAddTas] = useState(false)

 //Delete Task

 const deleteTask = (id)=>{
   setTasks(tasks.filter((task)=>task.id!==id))
 }
 //Add Task
 const addTask =(newTask)=>{
   const id = Math.floor(Math.random()*100)+1
   const addNewTask = {id , ...newTask}
   setTasks([...tasks , addNewTask])
 }

 //toggle done 
 const toggleDone = (toggleDoneId) =>{
   setTasks(
     tasks.map((task)=>
     task.id === toggleDoneId ? {...task, isDone : !task.isDone}:task)
   )
 }

 // show Add task 

 const toggleShow = ()=>setShowAddTas(!showAddTas)
  return (
    <div className="container">
      <Header title="TASK TRACKER"  showAddTas={showAddTas} toggleShow={toggleShow}/>

      {
        showAddTas &&  <AddTask addTask={addTask} />
      }
     

      {
        tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} /> : <p style={{textAlign:'center'}}>No Tasks to Show</p>
      }
     
      
    </div>
  );
}

export default App;
