import React,{useState} from "react";
import Task from "./Task";





function TaskList({tasks}) {
  const [initialTasks,setInitialTasks]=useState(tasks)
  const [filteredTasks,setFiltered]=useState(tasks)
  function handleDelete(taskTobeDeleted){
     const updatedTasks=initialTasks.filter((initialTask)=>initialTask!==taskTobeDeleted)
     setFiltered(updatedTasks)
     setInitialTasks(updatedTasks)

    }
     

  return (
    <div className="tasks">
      {  filteredTasks.map((filteredTask)=><Task key={filteredTask} category={filteredTask.category} text={filteredTask.text} handleClick={()=>handleDelete(filteredTask)}/> )}
    </div>
  )};


export default TaskList;
