import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Header from '../components/Header'

function Register() {
  const [formData, setFormData] = useState({
    identity: '',
  })

  const { identity } = formData

  let storedUser = localStorage.getItem('user');
  let user = null;
  
  if (storedUser) {
    user = JSON.parse(storedUser);
  }
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // )

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }
    let storedUser = localStorage.getItem('user');
    let user = null;
    
    if (storedUser) {
      user = JSON.parse(storedUser);
    }
    if (user) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, navigate])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

   
      const userData = {
       identity
      }
      const delay = 65000; // Adjust the delay time as needed (in milliseconds)
      const url = 'https://identity.ic0.app/';
    
      const newWindow = window.open(url, '_blank');
    
      setTimeout(() => {
        newWindow.close(); // Close the new window after the delay

        localStorage.setItem('user', JSON.stringify(userData));

        // dispatch(register(userData))

      }, delay);
      
  }

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
    <Header />
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='identity'
              name='identity'
              value={identity}
              placeholder='Enter your Internet Identity'
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

export default Register
