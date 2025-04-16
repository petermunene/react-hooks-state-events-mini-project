import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks,setTasks]=useState(TASKS)
  const [tasksToBeSeen,setTasksToBeSeen]=useState(tasks)
  


  function handleOnClick(categoryToBeSeen){
   alert(categoryToBeSeen)
   if(categoryToBeSeen==="All"){
    console.log(tasks)
   }
   else{
    const visibleTasks=tasks.filter((task)=>task.category===categoryToBeSeen)
    setTasksToBeSeen(visibleTasks)

   }
   
   

  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleOnClick} tasks={tasksToBeSeen}/>
      <NewTaskForm />
      <TaskList tasks={tasksToBeSeen} />
    
    </div>
  );
}

export default App;
