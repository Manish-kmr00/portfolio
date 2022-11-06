import React from 'react'
import About from '../components//about/About';
import Myskill from '../components//myskill/Myskill';
import Hero from '../components/hero/Hero';
import MyServices from '../components//myservices/MyServices';



const Home = () => {
  return (
    <>
        <Hero/>
        <Myskill/>
        <MyServices/>
        <About/>
    </>
  )
}

export default Home;
