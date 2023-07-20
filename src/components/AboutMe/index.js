import { useEffect, useState } from 'react'
import {
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
  faNode,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const AboutMe = () => {
  return (
    <>
      <div className="container aboutMe-page">
        <div className="text-zone">
          <div className="aboutMe-content">
            <div className="icons">
              <FontAwesomeIcon
                icon={faNode}
                color="#F06529"
                style={{ height: '9%', width: '9%' }}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                color="#F06529"
                style={{ height: '9%', width: '9%' }}
              />
              <FontAwesomeIcon
                icon={faCss3}
                color="#28A4D9"
                style={{ height: '9%', width: '9%' }}
              />
              <FontAwesomeIcon
                icon={faReact}
                color="#5ED4F4"
                style={{ height: '9%', width: '9%' }}
              />
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#EFD81D"
                style={{ height: '9%', width: '9%' }}
              />
              <FontAwesomeIcon
                icon={faGit}
                color="#EC4D28"
                style={{ height: '9%', width: '9%' }}
              />
            </div>
            <p>
              intro intro intro intro intro intro intro intro intro intro intro
              intro intro intro intro intro intro intro intro intro intro intro
              intro intro intro intro intro intro intro intro intro intro intro
            </p>
            <p align="LEFT">
              bootcamp bootcamp bootcamp bootcamp bootcamp bootcamp bootcamp{' '}
              bootcamp bootcamp bootcamp bootcamp bootcamp bootcamp bootcamp{' '}
              bootcamp bootcamp bootcamp bootcamp bootcamp bootcamp{' '}
            </p>
            <p>
              future future future future future future future future future{' '}
              future future future future future future future future future{' '}
            </p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
