import React from 'react'
import { useNavigate } from 'react-router-dom';
import notfound from "../../images/notfound.png"
import "./NotFound.css"

import { Link } from 'react-router-dom'

const NotFound = () => {




  const navigate = useNavigate()


  const notfoundconnect = () => {
    navigate("/")
  }

  
  return (
<>
<div className='notfound'>
  <img src={notfound} alt="404 Not Found" />
  </div>
  <div className='notfound-btn-div'> 
     <button className='notfound-btn' onClick={notfoundconnect}>Go to Home</button>
</div>
    <Link to='notfound'></Link>
    </>

  )
}

export default NotFound