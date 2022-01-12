import React from 'react';

export default function AddTask({ newTask, setNewTask, handleSubmit }) {
  return (
    <div>
      <form className="add-task" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>add task</button>
      </form>
    </div>
  );
}
