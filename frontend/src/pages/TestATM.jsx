import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

function TestATM() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {


  }, [user, isSuccess, navigate, dispatch])

 


  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Test ATM
        </h1>
        <p>Test</p>
      </section>

      <section className='form'>
      
      </section>
    </>
  )
}

export default TestATM
