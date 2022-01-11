import React from 'react';

export default function TaskList({ task }) {
  return (
    <div className="to-do-container">
      <h3>{task}</h3>
    </div>
  );
}
