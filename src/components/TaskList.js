import React from 'react';

export default function TaskList({ task, id }) {
  return (
    <div className="to-do-item">
      <input type="checkbox" value={id} />
      <label htmlFor={id}>{task}</label>
    </div>
  );
}
