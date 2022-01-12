import { useState, useEffect } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { addTask, getTasks, completeTask } from '../services/data';
import './ToDo.css';

export default function ToDo() {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([]);
  // const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(newTask);
      setNewTask('');
      const updatedList = await getTasks();
      setTasks(updatedList);
    } catch (error) {
      setError('An Error has occurred. Please try again.');
    }
  };

  const handleChange = async (task) => {
    await completeTask(task.id, !task.is_complete);
    const resp = await getTasks();
    setTasks(resp);
    console.log(resp);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="to-do-container">
        {tasks.map((item) => (
          <div key={item.id}>
            <TaskList task={item} handleChange={handleChange} />
          </div>
        ))}
      </div>
      <AddTask
        error={error}
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
