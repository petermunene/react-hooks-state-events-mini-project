import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [tasksToBeSeen, setTasksToBeSeen] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleOnClick(categoryToBeSeen) {
    setSelectedCategory(categoryToBeSeen)
    if (categoryToBeSeen === "All") {
      setTasksToBeSeen(tasks);
    } else {
      const visibleTasks = tasks.filter(
        (task) => task.category === categoryToBeSeen
      );
      setTasksToBeSeen(visibleTasks);
    }
  }

  function onTaskFormSubmit(newObj) {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newObj];
      setTasksToBeSeen(updatedTasks); // Update tasksToBeSeen as well
      return updatedTasks; // Return updated tasks
    });
  }

  function handleDelete(taskToDelete) {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);

    // Update tasksToBeSeen based on current filter
    if (selectedCategory === "All") {
      setTasksToBeSeen(updatedTasks);
    } else {
      setTasksToBeSeen(
        updatedTasks.filter((task) => task.category === selectedCategory)
      );
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleClick={handleOnClick}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm  categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}  />
      <TaskList tasks={tasksToBeSeen} onDelete={handleDelete} />
    </div>
  );
}
export default App