import React from 'react'
import "./Home.css";
import profileImage from '../public/profile.jpg';

const Home = () => {
  return (
    <>
    <div className='home-section'>
        <div className='text-section'>
             <h1>manchuru vishnuvardhan</h1>
             <p>Intro text: Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='image-section'>
        <img src={profileImage} alt="Profile" height={350} width={350} className='profile-image' />
      </div>
    </div>
    </>
  )
}

export default Home
