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
              Hello, I'm Jennifer Lin Rytikoff, a passionate full-stack
              developer with a strong academic foundation and a growing
              portfolio of hands-on experience. After completing an intensive
              coding bootcamp at UC Berkeley Extension, I further expanded my
              knowledge through college-level computer science coursework,
              earning A's in Programming Concepts/Methods I & II, Computer
              Architecture and Assembly Language, Discrete Structures for
              Computer Science, System Programming with the C language, and Web
              Programming I. I was also recently admitted to Georgia Tech's
              Master of Science in Computer Science (OMSCS) program.
            </p>
            <p>
              During the immersive bootcamp, I embraced the fast-paced learning
              process and honed my skills in a wide range of technologies,
              including HTML, CSS, JavaScript, React, Redux, Node.js, GraphQL,
              SQL, and NoSQL databases. This versatile skill set equips me to
              work with both classic and modern frameworks, empowering me to
              build innovative and impactful solutions. I'm proud to have
              achieved exceptional results during both the bootcamp and my
              academic coursework, reflecting my commitment to excellence.
            </p>
            <p>
              Since completing that coursework, I've continued developing my
              technical skills while actively applying to apprenticeships and
              junior developer roles. I've revisited and optimized earlier
              projects to reflect my growing proficiency and explored new
              challenges through C-based systems programming, with a focus on
              low-level logic and memory handling.
            </p>
            <p>
              Beyond technical expertise, my background as a one-on-one math
              tutor and language teacher has cultivated my ability to break down
              complex concepts and deliver tailored solutions. My experience in
              customer service has further sharpened my communication skills and
              strengthened my collaborative mindset.
            </p>
            <p>
              Now, a couple of years into my transition into tech, I'm excited
              to contribute to meaningful projects, grow alongside experienced
              engineers, and continue pushing the boundaries of what I can
              build.
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
              <SiGraphql style={{ color: '#E10098' }} />{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
