import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
// import { IIConnection } from '@dfinity/internet-identity'

function BankLogin() {
  const [formData, setFormData] = useState({
    identity: '',
  })

  const { identity } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/test-atm')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

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
  
    const delay = 40000; // Adjust the delay time as needed (in milliseconds)
    const url = 'https://identity.ic0.app/';
  
    const newWindow = window.open(url, '_blank');
  
    setTimeout(() => {
      newWindow.close(); // Close the new window after the delay
      dispatch(login(userData));
    }, delay);
  };
  

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Bank ATM Login</p>
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

export default BankLogin
