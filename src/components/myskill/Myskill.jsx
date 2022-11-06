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
              <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam corporis at porro nostrum, hic ad veniam consequatur placeat est iusto cum odio rem quos asperiores, commodi sequi ducimus atque obcaecati quisquam rerum esse distinctio ut suscipit? Nemo magni voluptatem veritatis voluptas architecto ex animi, consequatur natus enim consectetur aspernatur. Sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit, fugit iure ullam ipsum, ea maxime aut consectetur officiis impedit ipsa magnam unde obcaecati </p>
            </div>
            <div className='myskill-section-two'>
                <div className='bars'>
                <div className='info'>
                  <span>HTML</span>
                  <span>80%</span>
                </div>
                <div className='line html'></div>
                </div>
                <div className='bars'>
                <div className='info'>
                  <span>CSS</span>
                  <span>70%</span>
                </div>
                <div className='line css'></div>
                </div>
                <div className='bars'>
                <div className='info'>
                  <span>JavaScript</span>
                  <span>50%</span>
                </div>
                <div className='line js'></div>
                </div>
                <div className='bars'>
                <div className='info'>
                  <span>PHP</span>
                  <span>66%</span>
                </div>
                <div className='line php'></div>
                </div>
                <div className='bars'>
                <div className='info'>
                  <span>MySQL</span>
                  <span>80%</span>
                </div>
                <div className='line mysql'></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Myskill