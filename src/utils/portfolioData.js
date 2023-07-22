import comingSoon from '../assets/images/comingSoon_imgPlaceholder.png'
import TheSITE from '../assets/images/THE SITE you camp.png'
import WanderList from '../assets/images/WanderList.png'
import WeatherDashboard from '../assets/images/WeatherDashboard.png'
import TimedQuiz from '../assets/images/TimedQuiz.png'
import EngineeringTheFuture_JenRyt from '../assets/images/EngineeringTheFuture_JenniferRytikoff.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJsSquare,
  faNodeJs,
  faHtml5,
  faCss3,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
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

const portfolioData = [
  {
    image: EngineeringTheFuture_JenRyt,
    title: 'Engineering the Future : Jennifer Rytikoff',
    content: (
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
    image: WanderList,
    title: 'WanderList',
    content: (
      <div>
        <NodeJS />
        <JS />
        <CSS3 />
      </div>
    ),
    url: 'https://wanderlist.herokuapp.com',
    github: 'https://github.com/JDempe/WanderList',
  },
  {
    image: TheSITE,
    title: 'The SITE you camp',
    content: (
      <div>
        <JS />
        <HTML5 />
        <CSS3 />
      </div>
    ),
    url: 'https://kevrev.github.io/the-site/',
    github: 'https://github.com/Kevrev/the-site',
  },
  {
    image: WeatherDashboard,
    title: 'WeatherDashboard',
    content: (
      <div>
        <JS />
        <HTML5 />
        <CSS3 />
      </div>
    ),
    url: 'https://jenryt.github.io/WeatherDashboard/',
    github: 'https://github.com/jenryt/WeatherDashboard',
  },
  {
    image: TimedQuiz,
    title: 'Timed Quiz Mini Game',
    content: (
      <div>
        <JS />
        <HTML5 />
        <CSS3 />
      </div>
    ),
    url: 'https://jenryt.github.io/TimedQuiz/',
    github: 'https://github.com/jenryt/TimedQuiz',
  },
]

export default portfolioData
