import React from 'react'
import "./About.css"
import men from "../images/men.jpg"

const About = () => {


  return (
    <>
      <div className='about'>
        <h2 className='title'>About me</h2>
        <div className='about-main-section'>
            <div className='section-one-profile'>
                <img src={men} alt="" />
            </div>
            <div className='section-two'>
              <h4>I'm manish and i</h4>
              <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam corporis at porro nostrum, hic ad veniam consequatur placeat est iusto cum odio rem quos asperiores, commodi sequi ducimus atque obcaecati quisquam rerum esse distinctio ut suscipit? Nemo magni voluptatem veritatis voluptas architecto ex animi, consequatur natus enim consectetur aspernatur. Sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit, fugit iure ullam ipsum, ea maxime aut consectetur officiis impedit ipsa magnam unde obcaecati </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About