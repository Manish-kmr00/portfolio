import React from 'react'
import { FaPaintBrush, FaDev, FaHtml5} from 'react-icons/fa';
import "./MyServices.css"



const MyServices = () => {
    return (
        <>
            <div className='myservices'>
                <h2 className='title'>My Services</h2>
                <div className='main-div'>
                    <div className='div-one'><FaHtml5 size={35} /><h3>Web Development</h3>
                    <p>Like to code things from scratch, and enjoy bringing ideas to life in the browser.</p></div>
                    <div className='div-two'><FaDev size={35}/><h3>App Development</h3>
                    <p>Good experience in React.js for creating interactive ui's app react native concepts.</p></div>
                    <div className='div-three'><FaPaintBrush size={35}/><h3>Digital marketing </h3>
                    <p>Manage an organization's website and maintain it, keeping best practices in mind. </p></div>
                </div>
            </div>
        </>
    )
}



export default MyServices