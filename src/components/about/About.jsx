import React from 'react'
import  "../about/About.css"
import about from "../../images/about.png"


const About = () => {


  return (
    <>
      <div className='about'>
        <h2 className='title'>About me</h2>
        <div className='about-main-section'>
            <div className='section-one-profile'>
                <img src={about} alt="" />
            </div>
            <div className='section-two'>
              <h4>I'm manish and I'm a  Frontend Developer</h4>
              <p className='para'> We are looking for an ambitious and self-driven Front-end Developer to join our team. As a Front-end Developer, you will be responsible for implementing visual elements that users see and interact within a web application, which makes your role crucial for the success of our business.At our company, you will be working with the latest technology, you will have the chance to advance and grow your career. </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About