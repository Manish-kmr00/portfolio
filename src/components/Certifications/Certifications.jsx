import React from 'react'
import "./Certifications.css"
import digitalMarekting from "../../images/digitalMarketing.png"
import Simplilearn from "../../images/Simplilearn.png"




const Certifications = () => {




    return (
        <>

            <div className='Certificat'>
                <h2 className='certifcate-title'>Certifications</h2>
                <div className='Certificat-main-section'>
                    <div className='Certificat-main-section-div-one'>
                        <img src={Simplilearn} alt="" />
                        <h2>Frontend Developer</h2>
                        <h6>andrew Ng</h6>
                        <a href="https://simpli-web.app.link/e/dzSpDLA3Rub" target="_" >See More</a>
                    </div>
                    <div className='Certificat-main-section-div-two'>
                        <img src={Simplilearn} alt="" />
                        <h2>React.js Developer</h2>
                        <h6>andrew Ng</h6>
                        <a href="https://simpli-web.app.link/e/usUKqPe3Rub" target="_">See More</a>
                      
                    </div>
                    <div className='Certificat-main-section-div-three'>
                        <img src={digitalMarekting} alt="" />
                        <h2>Digital Marketing</h2>
                        <h6>Jackson Tyler</h6>
                        <a href="https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code" target="_">See More</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Certifications