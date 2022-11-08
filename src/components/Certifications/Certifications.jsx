import React from 'react'
import "./Certifications.css"
import digitalMarekting from "../../images/digitalMarketing.png"



const Certifications = () => {




    return (
        <>

            <div className='Certificat'>
                <h2 className='certifcate-title'>Certifications</h2>
                <div className='Certificat-main-section'>
                    <div className='Certificat-main-section-div-one'>
                        <img src={digitalMarekting} alt="" />
                        <h2>Digital Marekting</h2>
                        <h6>andrew Ng</h6>
                        <a href="">See More</a>
                    </div>
                    <div className='Certificat-main-section-div-two'>
                        <img src={digitalMarekting} alt="" />
                        <h2>Frontend Developer</h2>
                        <h6>andrew Ng</h6>
                        <a href="">See More</a>
                    </div>
                    <div className='Certificat-main-section-div-three'>
                        <img src={digitalMarekting} alt="" />
                        <h2>Mobile Developer</h2>
                        <h6>Jackson Tyler</h6>
                        <a href="">See More</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Certifications