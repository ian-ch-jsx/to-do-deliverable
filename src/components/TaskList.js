import React from 'react';

export default function TaskList({ task, handleChange }) {
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        value={task.id}
        checked={task.is_complete}
        onChange={() => handleChange(task)}
      />
      <label htmlFor={task.id}>{task.task}</label>
    </div>
  );
}
