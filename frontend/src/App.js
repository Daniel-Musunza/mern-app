import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import TestATM from './pages/TestATM'
import Home from './pages/Home'
import BankLogin from './pages/BankLogin'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
         
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/test-atm' element={<TestATM />} />
            <Route path='/login' element={<Login />} />
            <Route path='/bank-login' element={<BankLogin />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
