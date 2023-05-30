import React from 'react'
import "./Styles/ContactStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section className="touch" id="contact" >
        <p className='first'  data-reveal="left">What's Next?</p>
        <h1 data-reveal="left">Get In Touch</h1>
        <p className='about'>I’m currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, just message me and I get back to you!</p>
        <button data-reveal="left"><a href="mailto:singhlovepreet1209@gmail.com">Say Hello</a></button>
        <div className='social'>
            <div className='links'><a href="https://www.linkedin.com/in/lovepreet-singh-0b3ab4268/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a></div>
            <div className='links'><a href="https://instagram.com/lovepreetsingh_013/"><FontAwesomeIcon icon={faInstagram} /></a></div>
            <div className='links'> <a href="https://github.com/Lovepreet013"><FontAwesomeIcon icon={faGithub} /></a></div>
        </div>
    </section>
  )
}

export default Contact
