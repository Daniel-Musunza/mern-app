import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Home() {

  return (
    <>
      <section className='container1'>
        <div className='main-content1'>
          <h1>Welcome to the Future of Banking</h1>
          <p>Experience the next level of secure and convenient banking with our cutting-edge biometric authentication technology.</p>
         <Link to="/register"><button className='get-started-button'>Get Started</button></Link> 
        </div>
      </section>
    </>
  )
}

export default Home
