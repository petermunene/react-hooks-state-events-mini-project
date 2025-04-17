import React,{useState} from "react";


function NewTaskForm({categories , onTaskFormSubmit}) {
  const [details,setDetails]=useState("")
  const [category,setCategory]=useState("code")
  
  return (
    <form className="new-task-form"  onSubmit={(e)=>{
      e.preventDefault();
    onTaskFormSubmit({text:details , category })
    
    setDetails("")
  } 
    
    } >
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>setDetails(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>setCategory(e.target.value)}>
          {categories.map((category,index)=>
            category==="All"?null:<option key={index}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
