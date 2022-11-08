import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <>

      <footer>
        <div className='footer'>
          <hr />
          <div className='footer-social-icon'>
            <div className='instagram'>
              <a href="https://www.instagram.com/manishkmr000/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30}/>
              </a>
            </div>
            <div className='linkedin'>
              <a href="https://www.linkedin.com/in/manishkmr00" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30}/>
            </a>
            </div>
            <div className='github'>
            <a href="https://github.com/Manish-kmr00" target="_blank" rel="noopener noreferrer"> 
            <FaGithub size={30}/>
            </a>
            </div>
          </div>
          <p className='footer-first-para'>© Copyright 2022 by Manish</p>
          <p className='footer-second-para'>second</p>
        </div>
      </footer>


    </>)
}

export default Footer