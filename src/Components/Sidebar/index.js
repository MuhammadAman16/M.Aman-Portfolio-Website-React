import './index.scss'
import React from 'react'
import { useState } from 'react'
import LogoM from '../../assets/images/logo-m.png'
import upworkLogo from '../../assets/images/upwork-tile.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoM} alt="Logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="Muhammad Aman" /> */}
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          // eslint-disable-next-line
          onClick={() => (setShowNav(false), (document.title = 'Home'))}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          // eslint-disable-next-line
          onClick={() => (setShowNav(false), (document.title = 'About'))}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          // eslint-disable-next-line
          onClick={() => (setShowNav(false), (document.title = 'Contact'))}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ff5823"
          size="3x"
          className="close-icon"
        />{' '}
        <ul className="socials-desktop">
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-aman-896333232/"
              target="_blank"
              rel="noreferrer"
              className="linkOfsocials"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100072519645727"
              target="_blank"
              rel="noreferrer"
              className="linkOfsocials"
            >
              <FontAwesomeIcon icon={faFacebook} className="anchor-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MuhammadAman16"
              target="_blank"
              rel="noreferrer"
              className="linkOfsocials"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~01ac925c70dcd05132"
              target="_blank"
              rel="noreferrer"
              className="linkOfsocials"
            >
              <img className="upwork-logo" src={upworkLogo} alt="" />
            </a>
          </li>
        </ul>
      </nav>

      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ff5823"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
