import React from 'react'
import  "./Myskill.css"





const Myskill = () => {


  return (
    <>
      <div className='myskill'>
        <h2 className='myskill-title'>My Skills</h2>
        <div className='myskill-main-section'>
        <div className='myskill-section-one'>
              <h4>My creative skills & expriences</h4>
              <p className='para'>I am good for developing front-end engineer code or components because I know Html, CSS, React.js, Redux, Github, Bootstrap, react-native and Javascript to develop creative web application or mobile application. I will be able to adopt company's working environment quickly and can work efficiently. I think my skills are good for this job profile and I can learn and grow more to deliver better to the company and for betterment of my future. </p>
            </div>
            <div className='myskill-section-two'>
                <div className='bars'>
                <div className='info'>
                  <span>HTML</span>
                  <span>70%</span>
                </div>
                <div className='line html'></div>
                </div>
                <div className='bars'>
                <div className='info'>
                  <span>CSS</span>
                  <span>60%</span>
                </div>
                <div className='line css'></div>
                </div>
                <div className='bars'>
                <div className='info'>
                  <span>JavaScript</span>
                  <span>40%</span>
                </div>
                <div className='line js'></div>
                </div>
                <div className='bars'>
                <div className='info'>
                  <span>React.js</span>
                  <span>60%</span>
                </div>
                <div className='line react'></div>
                </div>
                <div className='bars'>
                <div className='info'>
                  <span>React-native</span>
                  <span>45%</span>
                </div>
                <div className='line react-native'></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Myskill