import React from 'react'
import {
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
  faNode,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import {
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiHeroku,
  SiBootstrap,
  SiRedux,
  SiHandlebarsdotjs,
  SiJquery,
  SiExpress,
} from 'react-icons/si'

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
                style={{ height: '6%', width: '6%', padding: '0.5%' }}
              />
              <FontAwesomeIcon
                icon={faReact}
                color="#5ED4F4"
                style={{ height: '6%', width: '6%', padding: '0.5%' }}
              />
              <SiRedux
                style={{
                  color: '#764ABC',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#EFD81D"
                style={{ height: '6%', width: '6%', padding: '0.5%' }}
              />
              <SiJquery
                style={{
                  color: '#0769AD',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                color="#F06529"
                style={{ height: '6%', width: '6%', padding: '0.5%' }}
              />
              <SiExpress
                style={{
                  color: '#fff',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <SiMongodb
                style={{
                  color: '#47A248',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <SiMysql
                style={{
                  color: '#4479A1',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <SiGraphql
                style={{
                  color: '#E10098',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <SiHeroku
                style={{
                  color: '#6567a5',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <SiBootstrap
                style={{
                  color: '#7952B3',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <SiHandlebarsdotjs
                style={{
                  color: '#fff',
                  height: '6%',
                  width: '6%',
                  padding: '0.5%',
                }}
              />
              <FontAwesomeIcon
                icon={faCss3}
                color="#28A4D9"
                style={{ height: '6%', width: '6%', padding: '0.5%' }}
              />
              <FontAwesomeIcon
                icon={faSass}
                color="#CD6799"
                style={{ height: '6%', width: '6%', padding: '0.5%' }}
              />
              <FontAwesomeIcon
                icon={faGit}
                color="#EC4D28"
                style={{ height: '6%', width: '6%', padding: '0.5%' }}
              />
            </div>
            <p>
              Hello, I'm Jennifer Lin Rytikoff, a passionate and dedicated
              full-stack developer who recently completed an intensive coding
              bootcamp at the University of California, Berkeley - Extension. I
              hold a B.A. degree in Political Economy from U.C. Berkeley, and my
              journey in the tech-field began with a fresh perspective and
              unwavering determination.
            </p>
            <p>
              During the immersive bootcamp, I embraced the fast-paced learning
              process and honed my skills in a wide range of technologies,
              including HTML, CSS, JavaScript, React, Redux, Node.js, GraphQL,
              SQL, and NoSQL Databases. This versatile skill set equips me to
              work with both classic and modern frameworks, empowering me to
              build innovative and impactful solutions. I am proud to have
              achieved exceptional results during the bootcamp, which reflects
              my dedication and commitment to excellence in my work.
            </p>
            <p>
              Beyond technical expertise, my background as a one-on-one math
              tutor and language teacher for thirty students has cultivated my
              ability to understand individual needs and deliver tailored
              solutions. Additionally, my extensive experience in customer
              service has sharpened my communication skills and fostered my
              collaborative spirit as a team player.
            </p>
            <p>
              Now, six months after embarking on this exciting journey, I am
              eager to seize new opportunities and contribute my skills to
              meaningful projects. I am committed to pushing the boundaries of
              what's possible in the tech world and making a positive impact
              through my work.
            </p>
            {/* <p align="LEFT"></p> */}
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
              <SiGraphql style={{ color: '#E10098' }} />{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
