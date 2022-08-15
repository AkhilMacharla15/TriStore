import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import "./About.scss" 


const About = () => {
  return (
    <>
    <Navbar/>
   
      <div className="about_container">
      <p className='aH1'>ABOUT US</p>
      <p className="about">Hello Tri People,</p>
        <p className='l1'>We are the tri members who created a store where you can shop your favorite T-shirts with cool designs.</p>
        <p className='l2'>Yes, your favorite show, your favorite season, or your own design T-shirts that you can design and sell on our website. </p>
        <p className='l3'>With an emphasis on the most recent fashion trends, our customers can be sure they'll stay ahead of that ever-evolving curve.</p>
        <p className='l4'>With our fantastic everyday pricing, everyone can always afford to look their best.</p>
        <p className='l5'>We will enter retail stores soon, and our retail ethos will remain the same as we develop our brand:</p>
        <p className='l6'>excellent clothes should be available to everyone, and shopping should be enjoyable.</p>
      
      </div>
      <Footer/>
    </>
  )
}

export default About