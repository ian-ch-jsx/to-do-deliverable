import React from 'react';
import classNames from 'classnames';

export default function TaskList({ task, handleChange, removeTask }) {
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        value={task.id}
        checked={task.is_complete}
        onChange={() => handleChange(task)}
      />
      <label htmlFor={task.id}>
        {task.task}{' '}
        <a value={task.id} onClick={() => removeTask(task)} className={classNames('delete')}>
          x
        </a>
      </label>
    </div>
  );
}
