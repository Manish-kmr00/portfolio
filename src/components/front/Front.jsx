import React from 'react'
import { useNavigate } from 'react-router-dom';
import man from "../../images/man.png"
import "./Front.css"
import Type from '../Type';




const Front = () => {


  const navigate = useNavigate()


  const navigatetocontact = () => {
    navigate("./contactme")
  }



  return (
    <>
      <div className='front-section'>
        <div className='front-section-para'>
          <h4 className='front-top'>This is me </h4>
          <h1 className='front-heading'>Kmr <br /> Manish</h1>
          <h3><Type /></h3>
          <p className='front-middle-section'>
            Developed Responsive Html Web Pages and Application using Html, Css, React.js, Redux, javaScript and React-native .Check out my latest web software development portfolio projects.
          </p>
          <button className='btn-cv'>Download CV</button>
          <button className='btn-contact' onClick={navigatetocontact}>Contact Me</button>
        </div>
        <div className='front-image'>
          <img src={man} alt="" />
        </div>
      </div>

    </>
  )
}

export default Front