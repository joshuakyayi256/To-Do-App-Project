import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName, checked: false}
    setToDoList([...toDoList, newTask])
  };

    function deletTask(deletTask) {
      setToDoList(toDoList.filter(task=> 
        task.taskName !== deletTask.taskName));
    }

    function toggleCheck (taskName) {
      setToDoList((prevToDoList) => prevToDoList.map(task => task.taskName === taskName ? {...task, checked: !task.checked} : task));
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
              deletTask={deletTask} toggleCheck={toggleCheck} />
              ))}
           </ul>

           
        </div>
        {toDoList.length ===0 ? (
             <p className='notify'>You are done!</p>
             ) : null}
      </div>
      <Stats toDoList={toDoList} />
    </>
  )
}

export default App;
