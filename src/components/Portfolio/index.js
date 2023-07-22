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
      breakpoint: { max: 1700, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
                  height="60%"
                  image={card.image}
                  title={card.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    style={{ overflow: 'auto', whiteSpace: 'nowrap' }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.content}
                  </Typography>
                </CardContent>
                <CardActions>
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
