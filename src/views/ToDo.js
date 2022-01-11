import { useState } from 'react';
import AddTask from '../components/AddTask';
import { addTask } from '../services/data';

export default function ToDo() {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(task);
      console.log('help');
    } catch (error) {
      setError('An Error has occurred. Please try again.');
    }
  };
  return (
    <div>
      <AddTask error={error} task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
}
