import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
import { EditTodoForm } from '../components/EditTodoForm';
import Spinner from '../components/Spinner';
import { getGoals, reset} from '../features/goals/goalSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message} = useSelector((state) => state.goals);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="TodoWrapper">
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <h2>Task Manager</h2>
      </section>
      <GoalForm />
      {goals.length > 0 ? (
        <div>
          {goals.map((goal) => (
            goal.isEditing ? (
              <EditTodoForm goal={goal} key={goal._id} />
            ) : (
              <GoalItem key={goal._id} goal={goal} />
            )
          ))}
        </div>
      ) : (
        <h3>You have not set any goals</h3>
      )}
    </div>
  );
}

export default Dashboard;
