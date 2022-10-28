import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Skills2 from '../Skills2'
import CV from '../../assets/images/CV.pdf'

const About = () => {
  const aboutArray = 'About Me'.split('')
  const SkillsArray = 'Skills'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className="containers about-page">
        <div className="text-zones">
          <h1>
            <AnimatedLetters
              strArray={aboutArray}
              letterClass={letterClass}
              idx={10}
            />
          </h1>
          <p>
            I am a hardworking and ambitious individual with a great passion for
            computers and software. I have completed my second year of Bachelors
            in Computer Science (BSCS) at the University of Karachi. I have good
            coding skills with adequate logic-building and project-management
            skills. Along with that, I have a good hand in programming languages
            such as HTML, CSS, JS, REACT, C++, etc. I have completed several
            front-end and back-end projects, and currently, I am working on an
            e-commerce website.
            <span>
              {' '}
              <a
                href="https://github.com/MuhammadAman16"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#ff5823', textDecoration: 'none' }}
              >
                Click here
              </a>
            </span>{' '}
            to view all my latest projects.
            <span className="bold-about">
              I provide a complete web development solution, from UI/UX design
              to web deployment and maintenance.
            </span>
          </p>
          <p>
            <span className="bold-about">Employment History:</span> I joined a
            company Technetic Official, at the start of 2020 where I worked as a
            senior graphic designer and contributed significantly to the growth
            of the company. After almost two years, by the end of 2021, I left
            Technetic and started my freelancing career in graphic designing and
            now in web development.
          </p>
          <p>
            <span className="bold-about">Education:</span>
            Currently enrolled in Bachelors of Computer Science (BSCS) from
            University of Karachi.
            <li>
              Secondary School Certificate (SSC) and Higher Secondary School
              Certificate (HSSC) from MSB Educational Institute.
            </li>
            <li>
              IELTS( an international standardized test of English language
              proficiency for non-native English language speakers.), cleared
              IELTS in 2020 with an overall band of 7.5 (out of 9) which has
              enabled me to communicate effectively with international clients.
            </li>
            <br />
            <a
              href={CV}
              className="flat-buttons"
              id="resume-btn"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </p>
        </div>

        <div className="about-container">
          <h1>
            <AnimatedLetters
              strArray={SkillsArray}
              letterClass={letterClass}
              idx={10}
            />
          </h1>
          <Skills2 />
        </div>
      </div>

      <Loader type="ball-rotate"></Loader>
    </>
  )
}

export default About
