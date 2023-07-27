import './index.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
import myImage from '../../assets/images/avatarImage01.jpg'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const email = 'jenyjlin@gmail.com'

  const handleContactClick = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div className="nav-bar">
      <div className="avatar">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '-3vh', fontSize: '180%' }}>
              Jennifer Lin
            </h2>
            <br />
            <h2 style={{ fontSize: '180%' }}>Rytikoff</h2>
          </div>
        </div>
        <Avatar
          alt="Jennifer Rytikoff"
          src={myImage}
          sx={{ width: 90, height: 90 }}
        />
      </div>

      <nav className={showNav ? 'mobile-show' : ''}>
        {/* Home */}
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#53626f" />
        </NavLink>
        {/* AboutMe */}
        <NavLink
          activeclassname="active"
          className="aboutMe-link"
          to="/aboutMe"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#53626f" />
        </NavLink>
        {/* Portfolio */}
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#53626f" />
        </NavLink>
        {/* Contact */}
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#53626f" />
        </NavLink>
        {/* Resume */}
        <NavLink
          exact={true}
          activeclassname="active"
          className="resume-link"
          to="/resume"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFileAlt} color="#53626f" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#fdb515"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        {/* Linkedin */}
        <li>
          <a
            href="http://www.linkedin.com/in/jennifer-rytikoff"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#53626f"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* GitHub */}
        <li>
          <a href="https://github.com/jenryt" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              color="#53626f"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* Email */}
        <li>
          <a href={`mailto:${email}`} onClick={handleContactClick}>
            <FontAwesomeIcon
              icon={faAt}
              color="#53626f"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#fdb515"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Navbar
