// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

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
        <form className="inputField" onSubmit={handleAddTask}>
            <input
                type="text"
                value={task}
                placeholder="Add a task"
                onChange={handleInputValue}
            />

            <button>+</button>
        </form>
    );
};

TaskInput.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default TaskInput;