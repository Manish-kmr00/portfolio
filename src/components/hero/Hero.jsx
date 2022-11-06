import React from 'react'
import man from "../../images/man.png"
import "../hero/Hero.css"
import Type from '../Type';




const Hero = () => {


  return (
    <>
      <div className='hero-section'>
        <div className='hero-section-para'>
          <h4 className='hero-top'>This is me </h4>
          <h1 className='hero-heading'>Kmr <br /> Manish</h1>
          <h3><Type/></h3>
          <p className='hero-middle-section'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem <br />
            placea atque a delectus eos nobis. Dolor velit ea doloribus provident.</p>
          <button className='btn'>Download CV</button>
          <button className='btn'>Contact Me</button>
        </div>
        <div className='hero-image'>
          <img src={man} alt="" />
        </div>
      </div>

    </>
  )
}

export default Hero