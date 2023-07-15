import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')
  const [time, setTime] = useState('');
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text, time}))
    setText('')
    setTime('')


  }

  return (
      <form onSubmit={onSubmit}  className="TodoForm">
          <input
            className="todo-input"
            type='text'
            name='text'
            id='text'
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
              Add Task
            </button>
      </form>
  )
}

export default GoalForm
