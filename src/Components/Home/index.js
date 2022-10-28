import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNode,
  faAngular,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // SHOTER WAY OF CREATING AN ARRAY
  const nameArray = "I'm Muhammad Aman".split('')
  const jobArray = 'web developer.'.split('')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }, [])
  return (
    <div className="containers home-page" id="home-container">
      <div className="text-zones">
        <h1>
          <span className={`${letterClass} _11`}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={35}
          />
        </h1>
        <h2 className="heading-2">
          Frontend Developer / Backend Developer / Expert Designer
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faNode} color="#44883e" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
