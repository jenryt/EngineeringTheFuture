import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            HELLO WORLD, <br />
            <h1 style={{ paddingLeft: '30px' }}>
              <br />
              Introducing Jennifer Rytikoff <br /> <br />
              A Full Stack Developer <br />
              <h1 style={{ paddingLeft: '20px' }}>
                "dependencies": &#123;
                <br />
                <h1 style={{ paddingLeft: '24px' }}>
                  "Passion-and-Creativity":&nbsp;"^1.0.0",
                  <br />
                </h1>
                &#125;
              </h1>
            </h1>{' '}
          </h1>
          <h2>
            Let's Build Tomorrow's World Together. <br />
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
