import React from 'react'
import './index.scss'
import resume from '../../assets/resume/Resume.pdf'

const Resume = () => {
  return (
    <div>
      <div className="resume-page">
        <div className="text-zone">
          <a href={resume} download style={{ textDecoration: 'none' }}>
            <h1>Download my Resume Here</h1>
          </a>
          <h2>
            Willing to work in-office or from home in the Greater Sacramento
            Area and the Bay Area. <br />
            <br /> <br />
            Fall 2026 <br />
            Admitted to Georgia Tech M.S. in Computer Science (OMSCS) <br />
            <br />
            01.2023-07.2023 <br />
            Certificate in Full Stack Coding Bootcamp, UC Berkeley <br />
            <br />
            09.2014-12.2016 <br />
            B.A. in Political Economy, UC Berkeley <br />
            <br /> <br />
            Full Stack Developer with hands-on experience building projects using 
            Java, C, HTML, CSS, JavaScript, React, Bootstrap, Node.js, GraphQL,
            GitHub, Heroku, SQL, and NoSQL databases such as MongoDB.
            <br />
            <br />
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Resume
