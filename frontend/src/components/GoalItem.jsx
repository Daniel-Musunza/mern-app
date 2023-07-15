import { useDispatch } from 'react-redux';
import { deleteGoal, toggleCompleteGoal, toggleEditGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleCompleteGoal(goal._id));
  };
  const handleToggleEdit = () => {
    dispatch(toggleEditGoal(goal._id));
  };

  return (
    <div className="Todo">
       <div onClick={handleToggleComplete}
               className={`${goal.completed ? 'completed' : ''}`}
            >
              <div className='checkbox-and-text' >
                <div className="checkbox"></div>
                <p className="text"> {goal.completed ? <del>{goal.text}</del> : goal.text}</p>
              </div>
       </div>
      <div>
        <span>{goal.time}hrs</span>
        <i className="fa-solid fa-pen-to-square edit-todo" onClick={handleToggleEdit}></i>
        <i className="fa-solid fa-trash delete-todo" onClick={() => dispatch(deleteGoal(goal._id))}></i>
      </div>
    </div>
  );
}

export default GoalItem;
