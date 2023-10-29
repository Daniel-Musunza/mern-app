import { useState, useEffect } from 'react'
import {FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logout, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function TestATM() {
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
  
  let cards = JSON.parse(localStorage.getItem('cards')) || [];
  // useEffect(() => {


  // }, [user, isSuccess, navigate, dispatch])

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/bank-login')
  }


  return (
      <section className='atm-container'>
        <h1 >Welcome User {user && user.identity}</h1>
        <img src="ATm.png" alt="" />
        <button className='btn' onClick={onLogout} style={{background: '#2ea0eb'}}>
              <FaSignOutAlt /> Quit
            </button>
      </section>
  )
}

export default TestATM
