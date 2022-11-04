import React from 'react'
import { FaPaintBrush, FaDev } from 'react-icons/fa';
import { SiHappycow } from 'react-icons/si';


import "./MyServices.css"

const MyServices = () => {
    return (

        <>
            <div className='myservices'>
                <h2 className='title'>My Services</h2>
                <div className='main-div'>
                    <div className='div-one'><FaPaintBrush size={35} /><h3>Web Design</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, eveniet!</p></div>
                    <div className='div-two'><FaDev size={35}/><h3>Digital marketing</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, voluptatibus?</p></div>
                    <div className='div-three'><SiHappycow size={35}/><h3>App Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est?</p></div>
                </div>
            </div>
        </>
    )
}

export default MyServices