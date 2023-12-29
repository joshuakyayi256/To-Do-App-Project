// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState("");
    console.log(task);

    function handleInputValue(e) {
        setTask(e.target.value);
    }

    function handleAddTask (e) {
        e.preventDefault();
        if (task.trim() === "") return;
        addTask(task);
        setTask("");
    }

  return (
    <form className="inputField" 
        onSubmit={handleAddTask}>
        <input type="text" 
        value={task} 
        placeholder="Add a task"  
        onChange={handleInputValue} />
        
        <button>+</button>
    </form>
  );
};

export default TaskInput;