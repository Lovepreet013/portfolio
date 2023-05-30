import React from 'react'
import "./Styles/HeroStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='social'>
            <div className='links'><a href="https://www.linkedin.com/in/lovepreet-singh-0b3ab4268/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a></div>
            <div className='links'><a href="https://instagram.com/lovepreetsingh_013/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a></div>
            <div className='links'><a href="https://github.com/Lovepreet013" target='_blank'><FontAwesomeIcon icon={faGithub} /></a></div>
            <div className='line'></div>
        </div>
        <div className='heroText'>
            <p>Hi, my name is</p>
            <h1>Lovepreet Singh.</h1>
            <h3>I build things for the web.</h3>
            <p>I'm a college student passionate about web development. Currently, I’m focusing on improving my web development skill.</p>
        </div>
    </div>
  )
}

export default Hero
