import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { FaInstagram ,FaLinkedin,FaGithub } from 'react-icons/fa';
import "./Navbar.css"
import logo from "../images/logo.png"


const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        </div>
        <ul className='menu'>
          <li >
            <NavLink to="/" style={{ textDecoration: "none" ,color:"white" }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="education" style={{ textDecoration: "none"  ,color:"white"}}>Education</NavLink>
          </li>
          <li>
          <NavLink to="projects" style={{ textDecoration: "none"  ,color:"white"}}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contactme" style={{ textDecoration: "none" ,color:"white" }}>Contact Me</NavLink>
          </li>
          </ul>
          <div className='social-icon'>
            <div className='instagram'>
              <a href="https://www.instagram.com/manishkmr000/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
            </div>
            <div className='linkedin'>
              <a href="https://www.linkedin.com/in/manishkmr00" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
            </a>
            </div>
            <div className='github'>
            <a href="https://github.com/Manish-kmr00" target="_blank" rel="noopener noreferrer"> 
            <FaGithub/>
            </a>
            </div>
          </div>
          <div className='connect-btn'>
        <button>Let's Connect</button>
        </div>
        </div>
    </nav>

  )
}

export default Navbar;