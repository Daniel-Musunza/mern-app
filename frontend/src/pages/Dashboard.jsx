import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { reset} from '../features/goals/goalSlice';
import VisaCard from '../components/VisaCard';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {

    if (!user) {
      navigate('/login');
    }


    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);


  return (
    <div className="TodoWrapper">
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <h2>BIOSECURE</h2>
      </section>
      <VisaCard />
    
    </div>
  );
}

export default Dashboard;
