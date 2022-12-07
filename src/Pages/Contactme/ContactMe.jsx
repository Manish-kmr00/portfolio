import React from 'react'
import "./ContactMe.css"
import { useState } from 'react'
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail, MdPublic } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';





const ContactMe = () => {

  const [userregistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",

  })

  const inputFun = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUserRegistration({ ...userregistration, [name]: value });
  }


  const handlesubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div>
        <div className='main'>
          <div className="section-one">
            <h2>Let's get in touch</h2>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className='section-one-input'>
              <div className='address'>
                <p> <IoLocationSharp /> Address : Okhla industrial estate south delhi ND - 110020</p>
              </div>
              <div className='phone-one'>
                <p ><IoCallSharp />  Phone: +91 7065 0181 63</p>
              </div>
              <div className='email-one'>
                <p> <MdOutlineEmail />  Email: mailmanishkmr@gmail.com</p>
              </div>
              <div className='website'>
                <p> <MdPublic />  Website:yoursite.com</p>
              </div>
              <div className='social-icon-first'>
                <div className='social-instagram'>
                  <a href="https://www.instagram.com/manishkmr000/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30}/>
                  </a>
                </div>
                <div className='social-linkedin'>
                  <a href="https://www.linkedin.com/in/manishkmr00" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <div className='social-github'>
                  <a href="https://github.com/Manish-kmr00" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='section-two'>
            <form onSubmit={handlesubmit}>
              <h2>Get in touch</h2>
              <div className="usename">
                <label htmlFor="username">Full Name</label><br />
                <input type="text" placeholder='Name' value={userregistration.username}
                  onChange={inputFun}
                  name="username" />
              </div>
              <div className="email">
                <label htmlFor="email">Email Address</label><br />
                <input type="text" placeholder='Email' value={userregistration.email}
                  onChange={inputFun}
                  name="email" />
              </div>
              <div className="phone" >
                <label htmlFor="phone">Phone No</label><br />
                <input type="text" placeholder='Phone' value={userregistration.phone}
                  onChange={inputFun}
                  name="phone" />
              </div>
              <div className='message'>
                <label htmlFor="message" >Message</label><br />
                <textarea rows="5" cols="25"
                  type="text" placeholder='Type your message' value={userregistration.message}
                  onChange={inputFun}
                  name="message" />
              </div>
              <button className='section-two-btn' type='Submit'>Send Message</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactMe;