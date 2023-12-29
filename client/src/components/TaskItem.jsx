import {MdDeleteSweep} from 'react-icons/md';
import PropTypes from 'prop-types';

const TaskItem = ({ task, deletTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" checked={task.checked} onChange={() => toggleCheck(task.taskName)} />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => deletTask(task.taskName)} />
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deletTask: PropTypes.func.isRequired,
  toggleCheck: PropTypes.func.isRequired
};

export default TaskItem;