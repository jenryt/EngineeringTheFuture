// images
import comingSoon from '../assets/images/comingSoon_imgPlaceholder.png'
import TheSITE from '../assets/images/THE SITE you camp.png'
import WanderList from '../assets/images/WanderList.png'
import Snapshot from '../assets/images/Snapshot.png'
import WeatherDashboard from '../assets/images/WeatherDashboard.png'
import TimedQuiz from '../assets/images/TimedQuiz.png'
import EngineeringTheFuture_JenRyt from '../assets/images/EngineeringTheFuture_JenniferRytikoff.png'
import personalPortfolio_noReact from '../assets/images/personalPortfolio_noReact.png'
import track_EM from "../assets/images/track'EM.jpeg"
import READMEgenerator from '../assets/images/README generator.jpeg'
import eCommerceBackend from '../assets/images/eCommerceBackend.jpeg'
import CircLink from '../assets/images/CircLink.jpeg'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJsSquare,
  faNodeJs,
  faHtml5,
  faCss3,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import {
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiBootstrap,
  SiRedux,
  SiHandlebarsdotjs,
  SiJquery,
  SiExpress,
  SiSequelize,
  SiMongoose,
} from 'react-icons/si'
// import {} from '@fortawesome/free-solid-svg-icons'

// icons component
const JS = () => {
  return (
    <FontAwesomeIcon
      icon={faJsSquare}
      color="#EFD81D"
      className="anchor-icon"
      style={{ padding: '3px' }}
    />
  )
}

const CSS3 = () => {
  return (
    <FontAwesomeIcon
      icon={faCss3}
      color="#28A4D9"
      className="anchor-icon"
      style={{ padding: '3px' }}
    />
  )
}

const HTML5 = () => {
  return (
    <FontAwesomeIcon
      icon={faHtml5}
      color="#F06529"
      className="anchor-icon"
      style={{ padding: '3px' }}
    />
  )
}

const NodeJS = () => {
  return (
    <FontAwesomeIcon
      icon={faNodeJs}
      color="#F06529"
      className="anchor-icon"
      style={{ padding: '3px' }}
    />
  )
}

const React = () => {
  return (
    <FontAwesomeIcon
      icon={faReact}
      color="#5ED4F4"
      className="anchor-icon"
      style={{ padding: '3px' }}
    />
  )
}

const Sass = () => {
  return (
    <FontAwesomeIcon
      icon={faSass}
      color="#CD6799"
      className="anchor-icon"
      style={{ padding: '3px' }}
    />
  )
}

const MongoDB = () => {
  return (
    <SiMongodb
      style={{
        color: '#47A248',
        padding: '3px',
      }}
    />
  )
}

const MySQL = () => {
  return (
    <SiMysql
      style={{
        color: '#4479A1',
        padding: '3px',
      }}
    />
  )
}

const EXPRESS = () => {
  return (
    <SiExpress
      style={{
        color: '#000000',
        padding: '3px',
      }}
    />
  )
}

const GraphQL = () => {
  return (
    <SiGraphql
      style={{
        color: '#E10098',
        padding: '3px',
      }}
    />
  )
}

const Redux = () => {
  return (
    <SiRedux
      style={{
        color: '#764ABC',
        padding: '3px',
      }}
    />
  )
}

const Bootstrap = () => {
  return (
    <SiBootstrap
      style={{
        color: '#7952B3',
        padding: '3px',
      }}
    />
  )
}

const Handlebars = () => {
  return (
    <SiHandlebarsdotjs
      style={{
        color: '#000000',
        padding: '3px',
      }}
    />
  )
}

const JQuery = () => {
  return (
    <SiJquery
      style={{
        color: '#0769AD',
        padding: '3px',
      }}
    />
  )
}

const Sequelize = () => {
  return (
    <SiSequelize
      style={{
        color: '#52B0E7',
        padding: '3px',
      }}
    />
  )
}

const Mongoose = () => {
  return (
    <SiMongoose
      style={{
        color: '#880000',
        padding: '3px',
      }}
    />
  )
}

const portfolioData = [
  {
    image: EngineeringTheFuture_JenRyt,
    title: 'Engineering the Future : Jennifer Rytikoff',
    content: (
      <p>
        Welcome to my React-powered portfolio. Explore a diverse range of
        projects showcasing my passion for design and development. Let's
        engineer the future together and build meaningful solutions! Connect
        with me through the contact page and don't forget to check out my first
        personal site to see how far I've come!
      </p>
    ),
    skill: (
      <div>
        <React />
        <NodeJS />
        <JS />
        <HTML5 />
        <Sass />
        <CSS3 />
      </div>
    ),
    url: 'https://jenryt.github.io/EngineeringTheFuture',
    github: 'https://github.com/jenryt/EngineeringTheFuture',
  },
  {
    image: Snapshot,
    title: 'Snapshot',
    content: (
      <p>
        An interactive photo-sharing platform where users can showcase, like,
        and purchase each other's captivating moments.
      </p>
    ),
    skill: (
      <div>
        <React />
        <NodeJS />
        <JS />
        <HTML5 />
        <Sass />
        <CSS3 />
        <GraphQL />
        <MongoDB />
        <Redux />
      </div>
    ),
    url: 'https://snapshot-marketplace-a63592d12ba6.herokuapp.com',
    github: 'https://github.com/JDempe/Snapshot',
    redeploying: true,
  },
  {
    image: WanderList,
    title: 'WanderList',
    content: (
      <p>
        Explore, pin, and exchange travel ideas with fellow adventurers on this
        exciting travel sharing website.
      </p>
    ),
    skill: (
      <div>
        <NodeJS />
        <JS />
        <JQuery />
        <CSS3 />
        <Handlebars />
        <MySQL />
        <Bootstrap />
      </div>
    ),
    url: 'https://wanderlist.herokuapp.com',
    github: 'https://github.com/JDempe/WanderList',
    redeploying: true,
  },
  {
    image: TheSITE,
    title: 'The SITE you camp',
    content: (
      <p>
        Discover nearby campsites based on user input using TheSITE's convenient
        Google API integration. Happy camping!
      </p>
    ),
    skill: (
      <div>
        <JS />
        <HTML5 />
        <CSS3 />
      </div>
    ),
    url: 'https://jenryt.github.io/theSITE/',
    github: 'https://github.com/jenryt/theSITE',
    redeploying: false,
  },
  {
    image: CircLink,
    title: 'CircLink',
    content: (
      <p>
        A robust social network API, built with MongoDB for optimal performance
        and scalability. Empower your app with intuitive endpoints for seamless
        connections and a compelling user experience.
      </p>
    ),
    skill: (
      <div>
        <NodeJS />
        <JS />
        <EXPRESS />
        <Mongoose />
      </div>
    ),
    url: '',
    github: 'https://github.com/jenryt/CircLink',
  },
  {
    image: eCommerceBackend,
    title: 'e-Commerce Backend',
    content: (
      <p>
        The backbone of your online store. Built with Node.js and MySQL, it
        efficiently manages products, categories, and tags, providing seamless
        browsing and filtering for a delightful user experience. Explore a world
        of possibilities with our powerful API endpoints.
      </p>
    ),
    skill: (
      <div>
        <JS />
        <NodeJS />
        <EXPRESS />
        <MySQL />
        <Sequelize />
      </div>
    ),
    url: '',
    github: 'https://github.com/jenryt/E-commerce_Backend',
  },
  {
    image: READMEgenerator,
    title: 'README generator',
    content: (
      <p>
        Simplify the process of creating a professional README file. Just answer
        a few questions via the command line, and our Node.js application will
        generate a complete and comprehensive README, leaving you with more time
        to focus on your project's development.
      </p>
    ),
    skill: (
      <div>
        <NodeJS />
        <JS />
      </div>
    ),
    url: '',
    github: 'https://github.com/jenryt/READMEGenerator',
  },
  {
    image: track_EM,
    title: 'track-EM_employee-tracker',
    content: (
      <p>
        Your all-in-one employee tracking system. Simplify management with
        departments, roles, and employees functionalities. Gain insights into
        salary budgets and streamline tracking with ease.
      </p>
    ),
    skill: (
      <div>
        <NodeJS />
        <JS />
        <EXPRESS />
        <MySQL />
      </div>
    ),
    url: '',
    github: 'https://github.com/jenryt/track-EM_employee-tracker',
  },
  {
    image: WeatherDashboard,
    title: 'WEATHER you go',
    content: (
      <p>
        Your go-to weather app for worldwide forecasts. Search any city for
        daily and 5-day weather reports, whether it's for upcoming travels or
        your local area. Stay informed and prepared with ease.
      </p>
    ),
    skill: (
      <div>
        <JS />
        <JQuery />
        <HTML5 />
        <CSS3 />
      </div>
    ),
    url: 'https://jenryt.github.io/WEATHER_you_go/',
    github: 'https://github.com/jenryt/WEATHER_you_go',
  },
  {
    image: TimedQuiz,
    title: 'Timed Quiz Mini Game',
    content: (
      <p>
        Put your capital knowledge to the test with our engaging quiz game! Get
        ready to challenge yourself and have fun as you guess capitals from
        around the world. Instructions provided for easy play. Let the fun
        begin!
      </p>
    ),
    skill: (
      <div>
        <JS />
        <HTML5 />
        <CSS3 />
      </div>
    ),
    url: 'https://jenryt.github.io/TimedQuiz/',
    github: 'https://github.com/jenryt/TimedQuiz',
  },
  {
    image: personalPortfolio_noReact,
    title: 'Personal Portfolio',
    content: (
      <p>
        Welcome to my first personal website, born during the early days of my
        full stack coding journey. Like a cherished first child, it showcases my
        projects and introduction. However, do check out my second personal
        website, where more advanced skills bring my growth to life. Witness the
        progress from my humble beginnings to a more refined expression of my
        full stack development journey.
      </p>
    ),
    skill: (
      <div>
        <HTML5 />
        <CSS3 />
      </div>
    ),
    url: 'https://jenryt.github.io/PersonalPortfolio/',
    github: 'https://github.com/jenryt/PersonalPortfolio',
  },
]

export default portfolioData
