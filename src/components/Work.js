import React from 'react'
import "./Styles/WorkStyles.css"
import Card from './Card'

const Work = () => {
  return (
    <div className='work' id='work'>
        <div className='upper'>
            <h1>Some projects I've built</h1>
            <div className='wline'></div>
        </div>
        <div className='card-container'>
            <Card
                heading="Sorting Algorithms Visualizer"
                des="Visualzes sorting process of various algorithms."
                skills = "HTML CSS Javascript"
                link="https://sorting-algo-visualizer.000webhostapp.com/"
            />
            <Card
                heading="Thunder Type"
                des="Typing website where user can check his typing speed in WPM."
                skills = "HTML CSS Javascript"
                link="https://thundertype.000webhostapp.com/"
            />
            <Card
                heading="React Memory Game"
                des="Memory game in which user has to match the two card."
                skills = "React.js"
                link="https://react-memory-game.onrender.com/"
            />
             <Card
                heading="Tour and Traveling Site"
                des="Tour and Traveling website client ui. React router is used for route handling."
                skills = "React.js"
                link="https://travelling-dusky.vercel.app/"
            />
        </div>
    </div>
  )
}

export default Work
