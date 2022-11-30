import React from 'react'
import About from '../components//about/About';
import Myskill from '../components//myskill/Myskill';
import Front from '../components/front/Front';
import MyServices from '../components//myservices/MyServices';



const Home = () => {
  return (
    <>
        <Front/>
        <Myskill/>
        <MyServices/>
        <About/>
    </>
  )
}

export default Home;
