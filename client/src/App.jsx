import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName, checked: false}
    setToDoList([...toDoList, newTask])
  };

  function deletTask(deletTask) {
    setToDoList(toDoList.filter(task=> task.taskName !== deletTask.taskName));
  }
console.log(toDoList);
  return (
    <>
      <div className='container'>
        <h1>TO-DO LIST</h1>

        <TaskInput addTask={addTask} />

        <div className='toDoList'>
           <span>To Do</span>

           <ul className='list-items'>
            {toDoList.map ((task, key) => (
              <TaskItem task={task} key={key}
              deletTask={deletTask} />
              ))}
           </ul>

           {toDoList.length ===0 ? ( <p className='notify'>You are done!</p>) : null}
        </div>

      </div>
    </>
  )
}

export default App
