import React from "react";
import {MdDeleteSweep} from 'react-icons/md';

const TaskItem = ({task, deletTask}) => {
  return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" />
        <p>{task.taskName}</p>
      </div>
      <MdDeleteSweep className="delete-icon" 
      onClick={() => deletTask(task.taskName)} />
    </li>
  );
}

export default TaskItem;