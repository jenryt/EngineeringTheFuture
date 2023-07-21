import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import './index.scss'
import myImage from '../../assets/images/avatarImage01.jpg'

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            HELLO WORLD, <br />
            <h1 style={{ paddingLeft: '30px' }}>
              <br />
              Introducing Jennifer Lin Rytikoff <br /> <br />
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
        <Avatar
          className="profilePic"
          alt="Jennifer Rytikoff"
          src={myImage}
          sx={{ width: 450, height: 450 }}
        />
      </div>
    </div>
  )
}

export default Home
