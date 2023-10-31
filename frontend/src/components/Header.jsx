import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)
  let storedUser = localStorage.getItem('user');
  let user = null;
  
  if (storedUser) {
    user = JSON.parse(storedUser);
  }
  
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
       <h2><Link to='/dashboard'><img src="logo192.png" alt="" width='100px' /></Link></h2> 
      </div>
      <ul>
      <li>
            <h3>
            <Link to='/'>
                 Home
              </Link>
            </h3>
              
            </li>
        {user ? (
          <>
          <li>
            <h3>
            <Link to='/dashboard'>
                 Dashboard
              </Link>
            </h3>
              
            </li>
            <li>
            <h3>
              User {user && user.identity}
            </h3> 
            </li>
            <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
          </>
         
        ) : (
          <>
            <li>
            
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li style={{marginRight: '20px'}}>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
