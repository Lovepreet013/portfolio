import React, { useState } from 'react'
import "./Styles/NavStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const[menu, setMenu] = useState({clicked: false});

    const handleMenu = () => {
        setMenu({clicked: !menu.clicked});
    }

  return (
    <nav class="navbar" id="navbar">
        <div className='logo'><h1>L.Dev</h1></div>
        <ul className={menu.clicked ? "nav-items active" : "nav-items"}>
            <a href="/" id='about'>About</a>
            <a href="/" id='work'>Work</a>
            <a href="/" id='contact'>Contact</a>
            <a href="https://drive.google.com/file/d/15yZWVsiliYOlDl1iwatJ9f1CHJY6VCmZ/view?usp=sharing" className='resume' target='_blank'>Resume</a>
        </ul>
        <div className='ham' onClick={handleMenu}>
            <div className='menu'><FontAwesomeIcon icon= {menu.clicked ? faTimes : faBars  } /></div>
        </div>
    </nav>
  )
}

export default Navbar
