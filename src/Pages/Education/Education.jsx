import React from 'react'
import "./Education.css"
import { FaEdge , FaDocker, FaPython,FaModx, FaSteam} from "react-icons/fa";
import education from "../../images/education.png"



const Education = () => {


  return (
    <>

      <div className='education'>
        <div className='education-section-one'>
          <img src={education} alt="education logo" />
        </div>

        {/* education section two */}

        <div className='education-section-two'>
        <div className='education-section-main-two'>
        <div className='education-title'>
          <h2 className='education-h2'>Education</h2>
          <h6 className='education-h6'>Basic Qualification and Certifications</h6>
          </div>
          <div className='education-icon'>
            <div className='logo-one'><FaEdge size={30} /></div>
            <div className='logo-two'><FaDocker size={30}/></div>
            <div className='logo-three'><FaModx size={30}/></div>
            <div className='logo-four'><FaPython size={30}/></div>
            <div className='logo-five'><FaSteam size={30}/></div>
          </div>
        </div>
        </div>
      </div>



    </>
  )
}



export default Education;