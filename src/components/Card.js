import React from 'react'
import "./Styles/WorkStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  return (
    <div className='card'>
        <a href={props.link} target="_blank">
            <div className="c-flex">
                <div className='top'>
                    <div className='folder'><FontAwesomeIcon icon={faFolder} /></div>
                    <div className='go-link'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></div>
                </div>
                <div className='bottom'>
                    <h4>{props.heading}</h4>
                    <p className='des'>{props.des}</p>
                    <div className='skills'>
                        <p>{props.skills}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
  )
}

export default Card
