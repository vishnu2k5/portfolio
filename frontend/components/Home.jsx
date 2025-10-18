import React from 'react'
import "./Home.css";


const Home = () => {
  return (
    <>
    <div className='home-section'>
        <div className='text-section'>
             <h1>Manchuru Vishnuvardhan</h1>
             <p></p>
        </div>
        <div className='image-section'>
        <img src="/profile.jpg" alt="Profile" height={350} width={350} className='profile-image' />
      </div>
    </div>
    </>
  )
}

export default Home
