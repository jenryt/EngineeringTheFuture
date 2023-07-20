import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faFileAlt,
  faSuitcase,
  faBars,
  faClose,
  faAt,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <p>Jennifer</p>
      <Avatar
        alt="Jennifer Rytikoff"
        src="/Users/jen/Desktop/bootcamp/Homework/Module_20_EngineeringTheFuture/react_portfolio copy/src/assets/images/avatarImage.jpeg"
      />

      <nav className={showNav ? 'mobile-show' : ''}>
        {/* Home */}
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        {/* AboutMe */}
        <NavLink
          activeclassname="active"
          className="aboutMe-link"
          to="/aboutMe"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        {/* Portfolio */}
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        {/* Contact */}
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        {/* Resume */}
        <NavLink
          exact={true}
          activeclassname="active"
          className="resume-link"
          to="/resume"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        {/* Linkedin */}
        <li>
          <a href="google.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* GitHub */}
        <li>
          <a href="http://www.google.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* Email */}
        <li>
          <a href="jenyjlin@gmail.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faAt}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Navbar
