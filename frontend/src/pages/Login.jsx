import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Header from '../components/Header'
// import { IIConnection } from '@dfinity/internet-identity'

function Login() {
  const [formData, setFormData] = useState({
    identity: '',
  })

  const { identity } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // )
  let storedUser = localStorage.getItem('user');
  let user = null;
  
  if (storedUser) {
    user = JSON.parse(storedUser);
  }
  

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    // if (user) {
    //   navigate('/dashboard')
    // }

    // dispatch(reset())
  }, [user, navigate])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
  
    const userData = {
      identity
    };
  
    const delay = 45000; // Adjust the delay time as needed (in milliseconds)
    const url = 'https://identity.ic0.app/';
  
    const newWindow = window.open(url, '_blank');
  
    setTimeout(() => {
      newWindow.close(); // Close the new window after the delay
      // dispatch(login(userData));

      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/dashboard');
    }, delay);
  };
  

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
    <Header />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='identity'
              name='identity'
              value={identity}
              placeholder='Your Internet Identity'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
