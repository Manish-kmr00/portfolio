import React from 'react'
import { FaCalendar } from 'react-icons/fa';
import ignou from "../../images/ignou.png"
import nios from "../../images/nios.png"
import "./Degree.css"

const Degree = () => {
    return (
        <>
            <div className='basic-qualification'>
                <h3>Basic Qualification</h3>
                <div className='degree'>
                    <div className='degree-one-icon'> <img src={ignou} alt="" /></div>
                    <div className='degree-div-one'>
                        <div className='degree-title'>
                            <h4>Indira Gandhi National Open University  <span><FaCalendar /> 2021 - Present</span></h4>
                            <h6>Bachelor of Arts (General)</h6>
                        </div>
                        <div className='degree-para'>
                            <p>Lorem ipsum dolor sit amet consectetu.</p>
                        </div>
                    </div>
                </div>

                <div className='degree-two'>
                    <div className='degree-two-icon'> <img src={nios} alt="" /></div>
                    <div className='degree-div-two'>
                        <div className='degree-title'>
                            <h4>National Institute of Open Schooling  <span><FaCalendar /> 2019  -  2021</span></h4>
                            <h6>Senior Secondary School</h6>
                        </div>
                        <div className='degree-para'>
                            <p>Lorem ipsum dolor sit amet consectetu.</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Degree;