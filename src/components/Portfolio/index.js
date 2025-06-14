import React from 'react'
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './index.scss'
import portfolioData from '../../utils/portfolioData'

const Portfolio = () => {
  const responsive = {
    xLargerMonitor: {
      breakpoint: { max: 3300, min: 2300 },
      items: 5, // # of item in Carousel
    },
    largerMonitor: {
      breakpoint: { max: 2300, min: 1800 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1350 },
      items: 3,
    },
    largeTablet: {
      breakpoint: { max: 1350, min: 464 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 850 },
      items: 2,
    },
    smallTablet: {
      breakpoint: { max: 850, min: 650 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="portfolio-container">
      <div className="container portfolio-page">
        <Carousel responsive={responsive} infinite>
          {portfolioData.map((card, index) => (
            <div key={index} className="cardWrapper">
              <Card
                // sx={{ maxWidth: 345 }}
                style={{
                  width: 345,
                  height: '100%',
                  borderRadius: 12,
                  backgroundColor: '#c2b9a7',
                }}
              >
                <CardMedia
                  component="img"
                  height="50%"
                  image={card.image}
                  title={card.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent className="projectInfo">
                  <Typography
                    className="projectTitle"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    className="projectContent"
                    variant="h4"
                    color="text.secondary"
                    content={card.content}
                  >
                    {card.content}
                  </Typography>
                  <Typography
                    className="projectSkill"
                    variant="h4"
                    color="text.secondary"
                    content={card.skill}
                  >
                    {card.skill}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* generate site button if it's provided */}
                  {card.redeploying ? (
                    <Button
                      size="large"
                      // disabled
                      style={{
                        border: 'solid 1px #003262',
                        borderRadius: 4,
                        color: '#003262',
                        transition: 'border-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#b5ac9b'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                      }}
                    >
                      Redeploying...
                    </Button>
                   ) : (
                    card.url && (
                    <Button
                      size="large"
                      href={card.url}
                      target="_blank"
                      style={{
                        border: 'solid 1px #003262',
                        borderRadius: 4,
                        color: '#003262',
                        transition: 'border-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#003262'
                        e.target.style.borderColor = '#003262'
                        e.target.style.color = '#fff'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.borderColor = '#003262'
                        e.target.style.color = '#003262'
                      }}
                    >
                      Visit the Site
                    </Button>
                  ))}
                  {/* generate github button if it's provided */}
                  {card.github && (
                    <Button
                      size="large"
                      href={card.github}
                      target="_blank"
                      style={{
                        border: 'solid 1px #003262',
                        borderRadius: 4,
                        color: '#003262',
                        transition: 'border-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#003262'
                        e.target.style.borderColor = '#003262'
                        e.target.style.color = '#fff'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.borderColor = '#003262'
                        e.target.style.color = '#003262'
                      }}
                    >
                      GitHub Link
                    </Button>
                  )}
                </CardActions>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Portfolio
