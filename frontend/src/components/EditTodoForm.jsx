import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateGoal, toggleEditGoal } from '../features/goals/goalSlice';

export const EditTodoForm = ({ goal }) => {
  const [text, setText] = useState(goal.text);
  const [time, setTime] = useState(goal.time);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGoal({ id: goal._id, text, time }));
    setText('');
    setTime('');
    dispatch(toggleEditGoal(goal._id));
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        className="todo-input"
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="time"
        className="time-input"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
