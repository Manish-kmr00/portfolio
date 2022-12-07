import React from 'react'
import { useState}  from "react"
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaInstagramSquare,} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/logo.png"
import { NavLink, Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

  const navigate = useNavigate()

  const navigatetocontact = () => {

    navigate("./Contactme") 
  }

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="education">Education</NavLink>
            </li>
            <li>
            <NavLink to="projects">Projects</NavLink>
            </li>
            <li>
            <NavLink to="/contactme">Contact Me</NavLink>
            </li>
          </ul>
        </div>
        
        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://github.com/Manish-kmr00" target="_blank" rel="noopener noreferrer">
                <FaGithub className="github" />
              </a>
            </li>
            <li>
            <a
                href="https://www.linkedin.com/in/manishkmr00" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="linkedin" />
              </a>
           
            </li>
            <li>
            <a href="https://www.instagram.com/manishkmr000/" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className='instagram'/>
            </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};


export default Navbar;