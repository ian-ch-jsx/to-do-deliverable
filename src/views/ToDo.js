import { useState, useEffect } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { addTask, getTasks } from '../services/data';

export default function ToDo() {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([]);
  // const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(newTask);
    } catch (error) {
      setError('An Error has occurred. Please try again.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {tasks.map((item) => (
          <div key={item.id}>
            <TaskList {...item} />
          </div>
        ))}
      </div>
      <AddTask
        error={error}
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
