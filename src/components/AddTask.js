import React from 'react';

export default function AddTask({ task, setTask, handleSubmit }) {
  return (
    <div>
      <form className="add-task" onSubmit={handleSubmit}>
        <div className="form-controls">
          <label>add task: </label>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
          <input type="submit" className="submit-btn"></input>
        </div>
      </form>
    </div>
  );
}
