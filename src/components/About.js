import React from 'react'
import "./Styles/AboutStyles.css"

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-text'>
            <div className='upper'>
                <h1>About Me</h1>
                <div className='Aline'></div>
            </div>
            <p>Hello! My name is Lovepreet and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing a website created by my brother — turns out hacking together a custom read more button taught me a lot about HTML & CSS!</p>
            <div>
                <h3>Here are the some technologies I'm working with recently :</h3>
                <div className='tech'>
                    <ul>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                    </ul>    
                    <ul>
                        <li>Express.js</li>
                        <li>MongoDb</li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div className='image'>
            <img src="/assets/IMGgg.jpg" alt="" />
            <div className='rec'></div>
        </div>  
    </div>
  )
}

export default About
